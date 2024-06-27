//запросы к нашей бд
async function routes(fastify, options) {
    const client = fastify.db.client
    fastify.get('/', async function (request, reply) {
        try {
            const { rows } = await client.query('SELECT * FROM games')
            //console.log(rows)
            reply.send(rows)
        } catch (err) {
            throw new Error(err)
        }
    })
}
module.exports = routes