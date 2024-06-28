const { table } = require("console")

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
                },
            }
        }
    }
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
        //q: qs.q ? String(qs.q).trim() : null // перевод в строку, если есть, иначе ничего
    })
}

async function paginate(fastify, { page, perPage }) {
    const client = fastify.db.client
    try {
        const total = await client.query('SELECT COUNT(*) FROM foods')
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
    const client = fastify.db.client
    //получение пользователей
    fastify.get('/', async function (request, reply) {
        try {
            const { rows } = await client.query('SELECT * FROM users')
            reply.send(rows)
        } catch (err) {
            throw new Error(err)
        }
    })
    //создание пользователя
    fastify.post('/create', UserCreate, async function (request, reply) {
        try {
            const email = request.body.email
            const name = request.body.name
            const gender = request.body.genderid
            const query = await client.query('INSERT INTO users (email, name, genderid) VALUES ($1, $2, $3)', [email, name, gender])
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
}
module.exports = routes