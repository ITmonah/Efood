const fastify = require('fastify')({ logger: true })
const dbconnector = require('./../db')
fastify.register(dbconnector)

const route = require('./../routes')
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

//мы заключили наш плагин в модуль быстрого подключения. Теперь мы можем получить доступ к экземпляру клиента базы данных в любом месте нашего сайта