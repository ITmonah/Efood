const { table } = require("console")

const { sign, hash } = require('crypto')

const UserCreate = {
    schema: {
        querystring: {
            //query параметры
        },
        body: {
            //что нам надо ввести
            type: "object",
            properties: {
                email: { type: 'string' },
                name: { type: 'string' },
                genderid: { type: 'integer' },
                password: { type: 'string' },
            },
        },
        response: {
            200: {
                //какой ответ мы получим
                type: "object",
                properties: {
                    email: { type: 'string' },
                    name: { type: 'string' },
                    genderid: { type: 'integer' },
                    password: { type: 'string' },
                },
            }
        }
    }
}

const UserLogin = {
    schema: {
        querystring: {
            //query параметры
        },
        body: {
            //что нам надо ввести
            type: "object",
            properties: {
                name: { type: 'string' },
                password: { type: 'string' },
            },
        },
        response: {
            200: {
                //какой ответ мы получим
                type: "object",
                properties: {
                    name: { type: 'string' },
                    password: { type: 'string' },
                },
            },
        },
    },
}
const FoodCreate = {
    schema: {
        querystring: {
            //query параметры
        },
        body: {
            //что нам надо ввести
            type: "object",
            properties: {
                img: { type: 'string' },
                stars: { type: 'integer' },
                name: { type: 'string' },
                price: { type: 'float' },
            },
        },
        response: {
            200: {
                //какой ответ мы получим
                type: "object",
                properties: {
                    img: { type: 'string' },
                    stars: { type: 'integer' },
                    name: { type: 'string' },
                    price: { type: 'float' },
                },
            }
        }
    }
}

async function getList(fastify, qs) {
    return await paginate(fastify, {
        page: parseInt(qs.page) || 1, //страница
        perPage: parseInt(qs.perPage) || 5, //количество товаров на странице
        category: qs.category
        //q: qs.q ? String(qs.q).trim() : null // перевод в строку, если есть, иначе ничего
    })
}

async function paginate(fastify, { page, perPage, category }) {
    const client = fastify.db.client
    try {
        const total = await client.query('SELECT COUNT(*) FROM foods JOIN categories ON foods.category = categories.id WHERE categories.name = $1',[category])
        count_total = parseInt(total.rows[0].count)

        const currentPage = Math.min(page, perPage) //текущая страница
        const offset = (currentPage - 1) * perPage //значение смещения
        const lastPage = Math.ceil(count_total / perPage) //последняя страница 

        //const data = await client.query('SELECT * FROM foods LIMIT %s OFFSET %s' % (perPage, offset))
        const data = await client.query('SELECT * FROM foods LIMIT $1 OFFSET $2', [perPage, offset])
        new_data = data.rows
        return {
            new_data,
            count_total,
            page,
            perPage,
            lastPage,
            firstPage: 1
        }
    } catch (err) {
        throw new Error(err)
    }
}

//запросы к нашей бд
async function routes(fastify, options) {
    fastify.register(require('fastify-bcrypt'), {
        saltWorkFactor: 10
    })

    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    fastify.register(require("@fastify/jwt"), {
        secret: process.env.SECRET_KEY,
        sign: {
            expiresIn: "10m"
        },
    })

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })

    const client = fastify.db.client
    fastify.get('/getUsername', {
        onRequest: [fastify.authenticate]
    }, async function (request, reply) {
        const query = await client.query('SELECT * FROM users WHERE email = $1', [request.user.username])
        
        if (!query.rows[0]) {
            throw new Error('User doesn\'t exists!')
        }

        reply.code(201)
        return {
            "username": query.rows[0].name,
            "email": query.rows[0].email,
        }
    })

    fastify.post('/show_all', async function (request, reply) {
        const query = await client.query('SELECT * FROM users')
        reply.send(query.rows)
    })

    fastify.post('/login', UserLogin, async function (request, reply) {
        try {
            let matched_flag = false

            const query = await client.query('SELECT * FROM users WHERE email = $1', [request.body.email])
            if (!query.rows[0]) {
                throw new Error('User doesn\'t exists!')
            }
            
            matched_flag = await bcrypt.compare(request.body.password, query.rows[0].password)

            if (matched_flag) {
                const token = fastify.jwt.sign({ username: `${request.body.email}` })
                reply.code(201)
                return { "token": token }
            } else {
                throw new Error('Wrong password')
            }

        } catch (err) {
            throw new Error(err)
        }
    })

    fastify.post('/registrate', UserCreate, async function (request, reply) {
        try {
            const user_query = await client.query('SELECT * FROM users WHERE name = $1 OR email = $2', [request.body.name, request.body.email])
            if (user_query.rows[0]) {
                throw new Error('User already exists!')
            }

            const email = request.body.email
            const name = request.body.name
            const gender = request.body.genderid
            let pwd = request.body.password

            pwd_hashed = await bcrypt.hash(pwd, saltRounds)

            const query = await client.query('INSERT INTO users (email, name, genderid, password) VALUES ($1, $2, $3, $4)', [email, name, gender, pwd_hashed])

            reply.code(201)
            return { created: true } //какой ответ получим
        } catch (err) {
            throw new Error(err)
        }
    })
    //получение бургеров
    fastify.get('/food', async function (request, reply) {
        try {
            const data = await getList(fastify, request.query);
            reply.send(
                data
            )
        } catch (err) {
            throw new Error(err)
        }
    })
    //создание бургеров
    fastify.post('/food/create', async function (request, reply) {
        try {
            const img = request.body.img
            const stars = request.body.stars
            const name = request.body.name
            const price = request.body.price

            const query = await client.query('INSERT INTO foods (img, stars, name, price) VALUES ($1, $2, $3, $4)', [img, stars, name, price])
            reply.code(201)
            return { created: true }
        } catch (err) {
            throw new Error(err)
        }
    })
    //получение ресторанов
    fastify.get('/restaurant', async function (request, reply) {
        try {
            const { rows } = await client.query('SELECT * FROM restaurants')
            reply.send(rows)
        } catch (err) {
            throw new Error(err)
        }
    })
    //получение отзывов
    fastify.get('/review', async function (request, reply) {
        try {
            const { rows } = await client.query('SELECT * FROM reviews')
            reply.send(rows)
        } catch (err) {
            throw new Error(err)
        }
    })
}
module.exports = routes