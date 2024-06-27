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

//запросы к нашей бд
async function routes(fastify, options) {
    const client = fastify.db.client
    fastify.get('/', async function (request, reply) {
        try {
            const { rows } = await client.query('SELECT * FROM users')
            //console.log(rows)
            reply.send(rows)
        } catch (err) {
            throw new Error(err)
        }
    })
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
}
module.exports = routes