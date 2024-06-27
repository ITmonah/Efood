const fastify = require('fastify')({ logger: true })
const dbconnector = require('./../db')
const route = require('./../routes')
const fp = require("fastify-plugin")

module.exports = fp(async function (fastify, opts) {
    fastify.register(require("@fastify/jwt"), {
        secret: "supersecret"
    })

    fastify.decorate("authenticate", async function (request, reply) {
        try {
            await request.jwtVerify()
        } catch (err) {
            reply.send(err)
        }
    })
})
fastify.register(dbconnector)
fastify.register(route)

async function start() {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()