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
        const query = await client.query('SELECT * FROM users WHERE name = $1', [request.name])
        if (!query.rows[0]) {
            throw new Error('User doesn\'t exists!')
        }
        return request.user
    })

    fastify.post('/show_all', async function (request, reply) {
        const query = await client.query('SELECT * FROM users')
        reply.send(query.rows)
    })

    fastify.post('/login', UserLogin, async function (request, reply) {
        try {
            let hashed_pwd = ''
            let matched_flag = false
            const query = await client.query('SELECT * FROM users WHERE email = $1', [request.body.email])
            if (!query.rows[0]) {
                throw new Error('User doesn\'t exists!')
            }
            // console.log(request.body.password)
            matched_flag = await bcrypt.compare(request.body.password, query.rows[0].password)
            if (matched_flag) {
                const token = fastify.jwt.sign({ username: request.body.name })
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
            console.log(pwd_hashed)
            const query = await client.query('INSERT INTO users (email, name, genderid, password) VALUES ($1, $2, $3, $4)', [email, name, gender, pwd_hashed])
            reply.code(201)
            return { created: true } //какой ответ получим
        } catch (err) {
            throw new Error(err)
        }
    })
}
module.exports = routes