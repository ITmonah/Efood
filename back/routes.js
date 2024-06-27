//запросы к нашей бд
async function routes(fastify, options) {
    const client = fastify.db.client
    fastify.get('/',{
        onRequest:[fastify.authenticate]
    }, async function (request, reply) {
        return request.user
    })
}
module.exports = routes