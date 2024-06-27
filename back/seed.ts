import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const alice = await prisma.users.upsert({
        where: { email: 'alice@prisma.io' },
        update: {},
        create: {
            email: 'alice@prisma.io',
            name: 'Alice',
            gender: {
                create: {
                    name: "female"
                },
            },
        },
    })
    const bob = await prisma.users.upsert({
        where: { email: 'bob@prisma.io' },
        update: {},
        create: {
            email: 'bob@prisma.io',
            name: 'Bob',
            gender: {
                create: {
                    name: "male"
                },
            },
        },
    })
    const food1 = await prisma.foods.upsert({
        where: { name: 'Cheeseburger With Salad' },
        update: {},
        create: {
            img: "https://s3-alpha-sig.figma.com/img/42ff/379f/0c30f44b914eb2ddf43ad8db4b3d015e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVR35YhlP44Yw9ksq~H4KYqczd1gZejZ3xNNDAD5ey0IpisobrNXZJEJtbJs~j7Qz~9DvS74oVekgyVqaur8xhV-CZLcG-7hQeKjkKzxpqS1Vxgm9yRAWzDS1W-G8PR5Tg2Ow-0ana5gflkthNzdAqPITTjHzkAn2tWp5M1B6BXnKd8lUJ5rcpOFwQ34ELW4mIfV-bfW-De1VIUtTfORZn-3ELAtpFwU6K-NEZyXdRNMuqxlwWHNUITJAZnzplbsRYxRB8XD0UVNEj2RtNLM1NV8vd36NghoOQs-wSHeahJtAj1~J1QmgCe-0gD03lzoI5hOaUgooyVpJmt6oMBL2w__",
            stars: 5,
            name: 'Cheeseburger With Salad',
            price: 18.00
        },
    })
    const food2 = await prisma.foods.upsert({
        where: { name: 'Beef Burger' },
        update: {},
        create: {
            img: "https://s3-alpha-sig.figma.com/img/54ce/aa2c/7803ee72b7475f16061a2a72c0237c4f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KX7SVT2xlAwh1tEw6lioM8oKA0Jh-gIiNKpRqtuRslh0Q1EG5yz4f3i-QQLpm3c7yLTD8QSfM34xaCT~gbm9mIvdgFJ9j~HTQSQ1c8TiIzjVYTXzMW9ADwrpaJKDq~gG4iVdE-K1S7G7a52m1doiRnCJMWZcjckJS5PX5quzcc6Le-qiOxi94JCOV4nRpIIM9vhgxfnASvyABt5lpogXSJQD-C8Kuu10XG5~ITtddh-PgoTYan4gVrKqp7vYVoyBbBsevUR4tpZ8am4jczBZ9pkUlVeeUYkDk36859emDV1P9~1uXIh62j6G1~x1JuR53kgzsnwx8S6KLt-nhciPNg__",
            stars: 5,
            name: 'Beef Burger',
            price: 15.00
        },
    })
    const food3 = await prisma.foods.upsert({
        where: { name: 'Royel Cheeseburger' },
        update: {},
        create: {
            img: "https://s3-alpha-sig.figma.com/img/6d1c/5525/b66d6256f0b73451b0bebf24049722c0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jH-m9MW47uDqvUX5V6WhAHnXZvm41bN-w1XatabU47mydafZMp2PMGykShUPyMfrSnqAhcUgXEHY~4ab0i~G~G2iLJT-eOjvtqFwmfXhaCq3vitKqz63d8XytHrmxJjdN3lRkp2ceZuHcB~7otyYgSqhGR4jEO98cGHuMwQ00Hz2qyUTcpUcWEefHKRQU3XmPxdcPfgb4GO~7N69ndpC0zBu9~BBFayqwlLkz1uKlYkVnLZfvIhPMGvM3MjelobEMMqYDweuR4CHorJgIHxvB9JcBAgGkB7Urs3xuCotAg8aLfLlTPTS7TXCQOmnjVRlOjVINlZlZlaujEECICN~cQ__",
            stars: 5,
            name: 'Royel Cheeseburger',
            price: 16.00
        },
    })
    const food4 = await prisma.foods.upsert({
        where: { name: 'Black Gambugrer' },
        update: {},
        create: {
            img: "https://s3-alpha-sig.figma.com/img/5abc/2eb1/d04e7e8cb389fe12392847a729574adf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BFj0ByacspLt6S0ql1hrHjqhMfs0HtQwkS1a4OthdsE~sgZcb2P~SU5C357pbVS3J~FWnTo~hzB-0AkLBi2QXGJPWJzfX5g6Iuuraahv~9Ihy2Vt-CYPV3qEd1iEaZMy9Uq1Z2vZzNBrglmiYTjKVCC9rIDDJeWBc6jWNHzVARUPNTxT96mMj5oPtB1Ug8VR~9hvaYVzkzh~Dvcohv8E~t8OWkvBAx7BiMM8yU3hsd2oq2gvnV4xAX5IVAGLyaAYn6gbQDuj7UsyA4x0CuxYHAxYM-bkXZ7L683bcK7a54UU14L9s0mQP9bRNx72YZNbcNLOCKKrs703fAhytSYC3A__",
            stars: 5,
            name: 'Black Gambugrer',
            price: 14.00
        },
    })
    const food5 = await prisma.foods.upsert({
        where: { name: 'Chicken Burger' },
        update: {},
        create: {
            img: "https://s3-alpha-sig.figma.com/img/12dc/6307/1d44c7d57ac2cd32291ad4b7c236085d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DRpZUugUE6MjLAIxhKFrFnxaRhlWjQ-93XDTEvG7mTvnlmOU2Sq8ZJXLoYFAJ1GXL5BzLnjjltAgKMYxrY75hWsLi81TmDp3bbCjWuzvaQnnBenazvxHSeZ4Y03gHRS7W3rqwD2OVvoC0ptGWrw6q5Mc6Q6PomMorUKkzPJe8wryCuwcZUx64d9WZ2waGg6ArcwJCwUZniPPSQKCPRc9RJKtqXZAsmEP4KqnZRZy6odPje4HvWGKK9eM07dfsY4mBmNUyyoi6RWjjkA8fh8jbENUZXMPZ08INdvNb0UHDemVOl4Zul-ihmvjk9oyoEVahJBgzX2m2pwqnOYcDuFy8Q__",
            stars: 5,
            name: 'Chicken Burger',
            price: 15.00
        },
    })
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