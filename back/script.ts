import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const user = await prisma.users.create(
        {
            data: {
                email: "xd22@xd22222343422.xd2",
                name: "Sanya",
            }
        }
    )
    const userWithIncl = await prisma.users.findMany(
        {
            include: {
                genders: true
            }
        }
    )
    console.dir(userWithIncl, { depth: null })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })