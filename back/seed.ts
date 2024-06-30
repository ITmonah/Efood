import { PrismaClient } from '@prisma/client'
import { create } from 'domain'
const prisma = new PrismaClient()
async function main() {
    //бургеры
    const food11 = await prisma.foods.create({
        data: {
            img: "https://s3-alpha-sig.figma.com/img/42ff/379f/0c30f44b914eb2ddf43ad8db4b3d015e?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SVR35YhlP44Yw9ksq~H4KYqczd1gZejZ3xNNDAD5ey0IpisobrNXZJEJtbJs~j7Qz~9DvS74oVekgyVqaur8xhV-CZLcG-7hQeKjkKzxpqS1Vxgm9yRAWzDS1W-G8PR5Tg2Ow-0ana5gflkthNzdAqPITTjHzkAn2tWp5M1B6BXnKd8lUJ5rcpOFwQ34ELW4mIfV-bfW-De1VIUtTfORZn-3ELAtpFwU6K-NEZyXdRNMuqxlwWHNUITJAZnzplbsRYxRB8XD0UVNEj2RtNLM1NV8vd36NghoOQs-wSHeahJtAj1~J1QmgCe-0gD03lzoI5hOaUgooyVpJmt6oMBL2w__",
            stars: 5,
            name: 'Cheeseburger With Salad',
            price: 18.00,
            category: {
                create: {
                    name: "Burger"
                },
            },
        },
    })
    const food12 = await prisma.foods.create({
        data: {
            img: "https://s3-alpha-sig.figma.com/img/54ce/aa2c/7803ee72b7475f16061a2a72c0237c4f?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KX7SVT2xlAwh1tEw6lioM8oKA0Jh-gIiNKpRqtuRslh0Q1EG5yz4f3i-QQLpm3c7yLTD8QSfM34xaCT~gbm9mIvdgFJ9j~HTQSQ1c8TiIzjVYTXzMW9ADwrpaJKDq~gG4iVdE-K1S7G7a52m1doiRnCJMWZcjckJS5PX5quzcc6Le-qiOxi94JCOV4nRpIIM9vhgxfnASvyABt5lpogXSJQD-C8Kuu10XG5~ITtddh-PgoTYan4gVrKqp7vYVoyBbBsevUR4tpZ8am4jczBZ9pkUlVeeUYkDk36859emDV1P9~1uXIh62j6G1~x1JuR53kgzsnwx8S6KLt-nhciPNg__",
            stars: 5,
            name: 'Beef Burger',
            price: 15.00,
            categoryid: 1,
        },
    })
    const food13 = await prisma.foods.create({
        data: {
            img: "https://s3-alpha-sig.figma.com/img/6d1c/5525/b66d6256f0b73451b0bebf24049722c0?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jH-m9MW47uDqvUX5V6WhAHnXZvm41bN-w1XatabU47mydafZMp2PMGykShUPyMfrSnqAhcUgXEHY~4ab0i~G~G2iLJT-eOjvtqFwmfXhaCq3vitKqz63d8XytHrmxJjdN3lRkp2ceZuHcB~7otyYgSqhGR4jEO98cGHuMwQ00Hz2qyUTcpUcWEefHKRQU3XmPxdcPfgb4GO~7N69ndpC0zBu9~BBFayqwlLkz1uKlYkVnLZfvIhPMGvM3MjelobEMMqYDweuR4CHorJgIHxvB9JcBAgGkB7Urs3xuCotAg8aLfLlTPTS7TXCQOmnjVRlOjVINlZlZlaujEECICN~cQ__",
            stars: 5,
            name: 'Royel Cheeseburger',
            price: 16.00,
            categoryid: 1,
        },
    })
    const food14 = await prisma.foods.create({
        data: {
            img: "https://s3-alpha-sig.figma.com/img/5abc/2eb1/d04e7e8cb389fe12392847a729574adf?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BFj0ByacspLt6S0ql1hrHjqhMfs0HtQwkS1a4OthdsE~sgZcb2P~SU5C357pbVS3J~FWnTo~hzB-0AkLBi2QXGJPWJzfX5g6Iuuraahv~9Ihy2Vt-CYPV3qEd1iEaZMy9Uq1Z2vZzNBrglmiYTjKVCC9rIDDJeWBc6jWNHzVARUPNTxT96mMj5oPtB1Ug8VR~9hvaYVzkzh~Dvcohv8E~t8OWkvBAx7BiMM8yU3hsd2oq2gvnV4xAX5IVAGLyaAYn6gbQDuj7UsyA4x0CuxYHAxYM-bkXZ7L683bcK7a54UU14L9s0mQP9bRNx72YZNbcNLOCKKrs703fAhytSYC3A__",
            stars: 5,
            name: 'Black Gambugrer',
            price: 14.00,
            categoryid: 1,
        },
    })
    const food15 = await prisma.foods.create({
        data: {
            img: "https://s3-alpha-sig.figma.com/img/12dc/6307/1d44c7d57ac2cd32291ad4b7c236085d?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DRpZUugUE6MjLAIxhKFrFnxaRhlWjQ-93XDTEvG7mTvnlmOU2Sq8ZJXLoYFAJ1GXL5BzLnjjltAgKMYxrY75hWsLi81TmDp3bbCjWuzvaQnnBenazvxHSeZ4Y03gHRS7W3rqwD2OVvoC0ptGWrw6q5Mc6Q6PomMorUKkzPJe8wryCuwcZUx64d9WZ2waGg6ArcwJCwUZniPPSQKCPRc9RJKtqXZAsmEP4KqnZRZy6odPje4HvWGKK9eM07dfsY4mBmNUyyoi6RWjjkA8fh8jbENUZXMPZ08INdvNb0UHDemVOl4Zul-ihmvjk9oyoEVahJBgzX2m2pwqnOYcDuFy8Q__",
            stars: 5,
            name: 'Chicken Burger',
            price: 15.00,
            categoryid: 1,
        },
    })
    //пицца
    const food21 = await prisma.foods.create(
        {
            data: {
                img: "https://maxxi-cafe.ru/images/catalog/chetyre-syra.jpg",
                stars: 5,
                name: 'Pizza with cheese',
                price: 13.00,
                category: {
                    create: {
                        name: "Pizza"
                    },
                },
            }
        }
    )
    const food22 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/i?id=2bc4c49110448a7fcd836e3cfd962e7fd23138bb-11485557-images-thumbs&n=13",
                stars: 4,
                name: 'Pizza with sausage',
                price: 14.00,
                categoryid: 2,
            }
        }
    )
    const food23 = await prisma.foods.create(
        {
            data: {
                img: "https://i0.photo.2gis.com/images/branch/105/14777436284519676_086c.jpg",
                stars: 3,
                name: 'Pizza with olives',
                price: 11.10,
                categoryid: 2,
            }
        }
    )
    const food24 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/i?id=18f9710ff6b03be11c5af69a571f686e4a333d8a-11375516-images-thumbs&n=13",
                stars: 5,
                name: 'Pizza with mushrooms',
                price: 12.50,
                categoryid: 2,
            }
        }
    )
    const food25 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/i?id=6084c6af21154b995556a76d2b8ff6a342c8714d-12371535-images-thumbs&n=13",
                stars: 2,
                name: 'Pizza with pineapples',
                price: 16.50,
                categoryid: 2,
            }
        }
    )
    //сендвичи
    const food31 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/get-eda/3506804/f0d213d7ffd74e6373e5223d486ce3f7/1200x1200nocrop",
                stars: 5,
                name: 'Sandwich roll with pink salmon and egg',
                price: 7.00,
                category: {
                    create: {
                        name: "Sandwich"
                    },
                },
            }
        }
    )
    const food32 = await prisma.foods.create(
        {
            data: {
                img: "https://krugroll.ru/wp-content/uploads/2022/08/s-lososem-1024x785.jpg",
                stars: 4,
                name: 'Chicken Sandwich',
                price: 6.50,
                categoryid: 3,
            }
        }
    )
    const food33 = await prisma.foods.create(
        {
            data: {
                img: "https://sun9-32.userapi.com/c633428/v633428087/c970/WIRRJQwngvs.jpg",
                stars: 4,
                name: 'Club sandwich with chicken and egg',
                price: 6.50,
                categoryid: 3,
            }
        }
    )
    const food34 = await prisma.foods.create(
        {
            data: {
                img: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-17/719/336/872/214/40/100063940983b0.jpg",
                stars: 5,
                name: 'Quesadilla',
                price: 8.30,
                categoryid: 3,
            }
        }
    )
    const food35 = await prisma.foods.create(
        {
            data: {
                img: "https://kudaeda.su/d/0457451.jpg",
                stars: 3,
                name: 'Club sandwich',
                price: 6.00,
                categoryid: 3,
            }
        }
    )
    //азиатская еда
    const food41 = await prisma.foods.create(
        {
            data: {
                img: "https://static.tildacdn.com/tild3836-6630-4132-b133-623337376335/-1024x786.png",
                stars: 4,
                name: 'Soba with chicken and vegetables',
                price: 10.00,
                category: {
                    create: {
                        name: "Asian Food"
                    },
                },
            }
        }
    )
    const food42 = await prisma.foods.create(
        {
            data: {
                img: "https://www.azianacafe.ru/assets/images/products/142/e32fb68e-bac2-4897-8d20-838246e677af.jpg",
                stars: 5,
                name: 'Salad with shrimp and funchosa',
                price: 18.00,
                categoryid: 4,
            }
        }
    )
    const food43 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/i?id=304ee7a87ac774e1555ce01718502d836c3a8868-9223904-images-thumbs&n=13",
                stars: 4,
                name: 'Kimchi',
                price: 10.00,
                categoryid: 4,
            }
        }
    )
    const food44 = await prisma.foods.create(
        {
            data: {
                img: "https://smartomato.ams3.cdn.digitaloceanspaces.com/uploads/media/photo/1558805/62d8022f-8ef0-4108-ac99-1a5da03bbeb2.jpg",
                stars: 5,
                name: 'Broken cucumbers',
                price: 12.00,
                categoryid: 4,
            }
        }
    )
    const food45 = await prisma.foods.create(
        {
            data: {
                img: "https://eda.yandex.ru/images/3439767/d90f7760eb9b58a8f708ddf3739218fe-680x500.jpg",
                stars: 5,
                name: 'Spring rolls with shrimp',
                price: 16.00,
                categoryid: 4,
            }
        }
    )
    const food46 = await prisma.foods.create(
        {
            data: {
                img: "https://avatars.mds.yandex.net/i?id=fb4f441622b772993fbf44a080a26ff1dec73a616e29e95a-12480668-images-thumbs&n=13",
                stars: 4,
                name: 'Tom Yam with shrimp',
                price: 20.00,
                categoryid: 4,
            }
        }
    )
    const food47 = await prisma.foods.create(
        {
            data: {
                img: "https://aventa.tmweb.ru/upload/iblock/b27/xrv8xhxy2k10mrh7wu4fx34p2u3rbbby/100007830.jpg",
                stars: 5,
                name: 'Ramen Soup',
                price: 17.00,
                categoryid: 4,
            }
        }
    )
    //сет меню
    const food51 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-31.jpg",
                stars: 4,
                name: 'Rice with meatballs and apple',
                price: 22.20,
                category: {
                    create: {
                        name: "Set Menu"
                    },
                },
            }
        }
    )
    const food52 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-33.jpg",
                stars: 5,
                name: 'Vegetables with chicken cutlet and apple',
                price: 20.20,
                categoryid: 5,
            }
        }
    )
    const food53 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-41.jpg",
                stars: 3,
                name: 'Mashed potatoes with chicken cutlet and banana',
                price: 19.20,
                categoryid: 5,
            }
        }
    )
    const food54 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-44.jpg",
                stars: 4,
                name: 'Buckwheat with cutlet, carrot and kiwi',
                price: 19.60,
                categoryid: 5,
            }
        }
    )
    const food55 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-47.jpg",
                stars: 5,
                name: 'Italian spaghetti with apple',
                price: 17.80,
                categoryid: 5,
            }
        }
    )
    const food56 = await prisma.foods.create(
        {
            data: {
                img: "http://kfncatering.school/wp-content/uploads/set-menu-6.jpg",
                stars: 5,
                name: 'Borscht with pizza and apple',
                price: 17.80,
                categoryid: 5,
            }
        }
    )
    //ресторан
    const rest1 = await prisma.restaurants.create(
        {
            data: {
                name: "Blaze Pizza",
                img: "https://s3-alpha-sig.figma.com/img/50e4/e885/c672d1329db01d1ae94ba093eb9d1f70?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4lPJck0mL2g3t7vEWuzeVdpSUwtYMLB2YBZNnOJvDkUjfaAcCH3q1oHLlZ8VR6NXpXrqqOwC17FQ85DUCRtBHvG~dhoCWikw3La9rCAi62SprI5jeDZILziIrHiwBxzb5CZ3~hrf~to~ZFIqQ1T45vhr3qRZ3YoylmDLWs66x0-uSFD2su9fxDuhLV43yQEZZ4wC7W8KLgyMuVk1W5qE-hQjEQD8dFcuZcHDuDKLpsUKxOEQfTag44ELVnJQiWKFXgD4rzy8kL-4SXBGuHA4V1Et1kVhQkGY47m53HCyQImy1nNUfZaaxsgIJts~6DqYnF5w5BtiSScy5bsLqkwAA__",
                first_date: new Date(2024, 6, 1, (11 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
            }
        }
    )
    const rest2 = await prisma.restaurants.create(
        {
            data: {
                name: "Pizza Ranch",
                img: "https://s3-alpha-sig.figma.com/img/11c1/bc37/1785cca2d17816de53959c7c4300e27b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDwtx0mIUtEML6XIRF3YUssmIM0YWk77-4rNGq~YHFa7qjAjxQLauZY~az8gJFaXH68sWUuxoMdymrenpBX28gLOsExoIKizs4AJN7S9w89j02L0dREbOkbo2PMN1e-egwXVfmL6l7yKsliTjOiPDBveNEvIs8vqiPurBlphnGOlZYFx6pZuF0FZnnAp9StFEVzJWuV9XFidfIXWDdtmqm5LAW~1byObHKu4x9FNoFLPZEolVT-Fj2FZXuKOdxXnv16GxonkJPSzQ7f5d7yfU-RrEDPfaOicQQci4QlgqSSBWPnfSua-cSzJ3iEFvC~MK8oV9pIjFh4vVNtKFWfhNQ__",
                first_date: new Date(2024, 6, 1, (9 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
            }
        }
    )
    const rest3 = await prisma.restaurants.create(
        {
            data: {
                name: "Dion`s Pizza Hut",
                img: "https://s3-alpha-sig.figma.com/img/5fcf/6806/e63c27fb1a705c5849089079a4973cd3?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AobPjIpat79wnioIPlJW0ve7bcrpzeYOUAeH1GGaQ~AwnACK1ugDoC~EnsGVtewlf3BU3egRyIMXurk4RYlriuEgpVb5d5utzFC0jUraMgn7hbxL8B~rpVNQLyyb~vOHDMHjgeK7reeXVZeQT0mLy-ixYeUs7La7MP4w5rsRBP4AVDL8i1gRgfEEDaxcrZcVgihjO7R2eyUZ9Ueb2vbmAOxVhBIohfm5Dkvx-oRD352yhUn4UBAVb-srPY2Xd3ooPZT98Xwl8m5EkUr1DCShO1X9QzTA72ycJHLQpz329sY9Y80exakm3ht0nuDjEqeX8MfyTN64Ca9fGUGA~fF3QQ__",
                first_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (12 + 5), 0, 0).toISOString(),
            }
        }
    )
    const rest4 = await prisma.restaurants.create(
        {
            data: {
                name: "Royel Burger",
                img: "https://s3-alpha-sig.figma.com/img/b56e/7cf9/209a1728613bce1a8a5f845cb0f5ef77?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ehPVApau~ojAjOFyeLrwxydVwMe0eG7Vi-6Krr6C2wFJcjsKAzf9zqzuaQL6QZZdt1uXk~FPJrrUQGPLTZ-YtDOmoGW2hs3SmpocebT6QQiJMdizxz-CpHxC-8aCd2H-vhGO8fK8CusWk4zGauOO-g1QK6D7gGaGnwqBEmpxbKOoBaf4Vj4R86xxxC9ESjYn0-slkWi~sGxYuSkva0bPJ9bwkMP8ryXT9-Fm0cD0DdY5l4emUqaHrJWuQyAZHaHP5l1lVbSSnu1vm98o6rSIDcf3jjpgbxmK7fhUkCeQ~EaiI10XXCOE6c1PwNDknMHiVuCCYTDwpJ9o-RCa4-B5rA__",
                first_date: new Date(2024, 6, 1, (11 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
            }
        }
    )
    const rest5 = await prisma.restaurants.create(
        {
            data: {
                name: "KFC Restaurant",
                img: "https://s3-alpha-sig.figma.com/img/98c0/a547/a745e0f33d03c9b13357ec0b093b6262?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jozTcJDkWyRH4Jne8oz0SAZOJqzuMNDojhPSsfFwGJ~1ghC9NtEIgKB~yqcwV5JoBSHUhRlFZ~VhDHj1JXHcpQ3a8nFB907eh8TPXmh3fkrqyU~CZLqpOzesuuonAdQNyqnjWaTV4dZx2mgGuANWluKyo9QLs9w4mx3BX7M2RzcfcUeaNrKN94KuyxoiBaGDuzo~dYz3zfc50pTrJMbLVYEb-cO6My36-5F9Mv8Gk8davBXlBdejDiZciSjv31V8Dlhu4MQSpIwXtgePJoNsPmPeanIdo0Ht6D9uft-xrJvry2rMtnWh25TxgGp4HWCvfYacX7SF~HJ46riZl~stxQ__",
                first_date: new Date(2024, 6, 1, (9 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
            }
        }
    )
    const rest6 = await prisma.restaurants.create(
        {
            data: {
                name: "Star Food",
                img: "https://s3-alpha-sig.figma.com/img/d90e/6341/ba3d12c8cf047ae0a269ef8f04790744?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOksSxGRMF8ah0HNgJcjlN4ovKPFDmvCuBH-5t~Hm3mT2Cp3vtvqPmRuudp74FdkAl9dpxqlDcbamW0arKq22GRZBEv5~nIcESaWFU-tVvVaXKq1OyHPOqlJ2pPTEQHvy6s-~ZZEPrWn9ZuUxeYHlSJfrj3WYz65nF4~1G9QerWabfDyiyKhk2XlfgH--5Wsp-TtBUkyGVVUTjHbvR8fMXaWEjih3zVThd2JQjLJ6SH-LZYx9o2WgN~V0SFkPgzHYI9NaFmygWYg-abEarxh2OYSouUGukYzwjIsaF-I~XGcpRrHJymZvQCWSEBgOk5uiU0wplobBagEyXmd-9le6w__",
                first_date: new Date(2024, 6, 1, (10 + 5), 0, 0).toISOString(),
                second_date: new Date(2024, 6, 1, (12 + 5), 0, 0).toISOString(),
            }
        }
    )
    //отзывы
    const rev1 = await prisma.reviews.create(
        {
            data: {
                img: "https://s3-alpha-sig.figma.com/img/d01f/a778/a25b21bba99889d05a133a0a25fef9ee?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2BWUrsFTnNcABMrhc6Wfb-Y5pWLNbZmSRSSXtXuTqtMLdx8ZsUVREjJWmOhnzEzy8vZAYS~eDlRjXmZ8SIzTR0L74f1WQV5zxTNgfEjUaolx5oEADd7BM0I36h3NDwdzWpVXCSPM4cv7qfPSqoi7o7m9aihEuI6yVzzHnChcbdaLboyCBv5cQcgB~p8nQ8lIcU-s~7dvpDpscw6T8WhHs3RZVdwylo4xvaQiqQyOgwkWnRaJLNej2gu6vti654QNpQHr71IPDuRpWQ-iqs-od4E4EW3H~yLM-mKJV0qmsBoGD1KS3U~PkQygS53S4bEpB5nIY~MYh0~weOf8tfELw__",
                text: "EFood is kruto!",
                name: "Review 1",
                status: "true",
                user: {
                    create: {
                        email: "email@email.email",
                        name: "Michael Jordan",
                        password: "$2a$10$AlXGr7dxsVKJIYy7aNEjBOIg9AOz4wTT3UTWpXgG0fRuq5PCiRPqq",
                        status: "Food Lover",
                        img: "https://yandex-images.clstorage.net/UWHJ96389/bd0d27k12uoQ/AhdJZW_T1CiDSFgySdl5nueBS8HoMvKzWcubI5x3BXoXLYnHOTY8nNSanyS--hD_GIzCUXuVmzBiL19o1A_OICZDjdFeBmF8si0YsnmJWEszsFoESHcjF3z-e6afwdddgHsOVA7BC2slbwqEu_v0SxxPZNUcs403ZEkrrLE4qQAD9_jnOgMk-eSqajPJekgqR-C6VejV0zANCJxgzzDlDwNp7ZZPEUrp1j4rJov5YPqebRZDDAIMlHeqaX1BmeoBknbKpHsApfokCojCSXm7SFdzaafbt2GynHtO4j-QBY1hO90lfHFJGWZ_6_RbKiPrD_43oa-R3GRGKylvgnhLoYMHuJfZQTcIxIrrYcroSJr0EUpUGNZiYD94vCPucMQNcOqMd17wC6tEvyhGuYozuT_u1fA_Es5m5gi4HEA6SGFh9blm-9GUOBS7KsLLSgmYNGHrJrhWoAHuiD2A_kI3_-D7rlaPEOmphB9apFqq4cssPfXxnvHMV4Z5K3zDehvzU4UZxpnDxzvEKbuzKLsaizWD6YXZtTNhX1nMYg0jhE9zyAwWLrBYi1X9WDY5iWDKDC8X0U-C_pbX6hp_odpYcEMWSndrgeZK1rqoEZm722kWc1uGSDaBMn7J7nEdYoTPIsiuBc7iOSi1r6kmayqiaE4eJUEMU_52RnjajOMKGRMTB8olGSCEeaWbatBayojaNlGIVnpn0LB8q25zjVF3L9I5nTVcYbsoRa1YpimYULpv3CdCnULMBXUou57CG1rzA_XYJikSR_vli5rgi_naO6ZQa-fbpYKzrYot489iF80DaK5UHoDqmxWcuBZJ6mAIf541E-2QfmaHGQnO4mpaUyM2eSTbAGUKxQvrIljoWytHMhomOHchYG5bj4NuQpUPgWvMF7ywaKnmfTt2eJtwSyx990ANAhx1pavq3oOKyQCx1SjWa8JVK_aqupE7W4o4VuJ65UhlYuGNODwhg",
                    }
                },
            }
        }
    )
    const rev2 = await prisma.reviews.create(
        {
            data: {
                img: "https://s3-alpha-sig.figma.com/img/d01f/a778/a25b21bba99889d05a133a0a25fef9ee?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2BWUrsFTnNcABMrhc6Wfb-Y5pWLNbZmSRSSXtXuTqtMLdx8ZsUVREjJWmOhnzEzy8vZAYS~eDlRjXmZ8SIzTR0L74f1WQV5zxTNgfEjUaolx5oEADd7BM0I36h3NDwdzWpVXCSPM4cv7qfPSqoi7o7m9aihEuI6yVzzHnChcbdaLboyCBv5cQcgB~p8nQ8lIcU-s~7dvpDpscw6T8WhHs3RZVdwylo4xvaQiqQyOgwkWnRaJLNej2gu6vti654QNpQHr71IPDuRpWQ-iqs-od4E4EW3H~yLM-mKJV0qmsBoGD1KS3U~PkQygS53S4bEpB5nIY~MYh0~weOf8tfELw__",
                text: "EFood is class!;",
                name: "Review 1",
                status: "true",
                user: {
                    create: {
                        email: "email@email.email1",
                        name: "Michael Jordan1",
                        password: "$2a$10$AlXGr7dxsVKJIYy7aNEjBOIg9AOz4wTT3UTWpXgG0fRuq5PCiRPqq",
                        status: "Food Lover",
                        img: "https://yandex-images.clstorage.net/UWHJ96389/bd0d27k12uoQ/AhdJZW_T1CiDSFgySdl5nueBS8HoMvKzWcubI5x3BXoXLYnHOTY8nNSanyS--hD_GIzCUXuVmzBiL19o1A_OICZDjdFeBmF8si0YsnmJWEszsFoESHcjF3z-e6afwdddgHsOVA7BC2slbwqEu_v0SxxPZNUcs403ZEkrrLE4qQAD9_jnOgMk-eSqajPJekgqR-C6VejV0zANCJxgzzDlDwNp7ZZPEUrp1j4rJov5YPqebRZDDAIMlHeqaX1BmeoBknbKpHsApfokCojCSXm7SFdzaafbt2GynHtO4j-QBY1hO90lfHFJGWZ_6_RbKiPrD_43oa-R3GRGKylvgnhLoYMHuJfZQTcIxIrrYcroSJr0EUpUGNZiYD94vCPucMQNcOqMd17wC6tEvyhGuYozuT_u1fA_Es5m5gi4HEA6SGFh9blm-9GUOBS7KsLLSgmYNGHrJrhWoAHuiD2A_kI3_-D7rlaPEOmphB9apFqq4cssPfXxnvHMV4Z5K3zDehvzU4UZxpnDxzvEKbuzKLsaizWD6YXZtTNhX1nMYg0jhE9zyAwWLrBYi1X9WDY5iWDKDC8X0U-C_pbX6hp_odpYcEMWSndrgeZK1rqoEZm722kWc1uGSDaBMn7J7nEdYoTPIsiuBc7iOSi1r6kmayqiaE4eJUEMU_52RnjajOMKGRMTB8olGSCEeaWbatBayojaNlGIVnpn0LB8q25zjVF3L9I5nTVcYbsoRa1YpimYULpv3CdCnULMBXUou57CG1rzA_XYJikSR_vli5rgi_naO6ZQa-fbpYKzrYot489iF80DaK5UHoDqmxWcuBZJ6mAIf541E-2QfmaHGQnO4mpaUyM2eSTbAGUKxQvrIljoWytHMhomOHchYG5bj4NuQpUPgWvMF7ywaKnmfTt2eJtwSyx990ANAhx1pavq3oOKyQCx1SjWa8JVK_aqupE7W4o4VuJ65UhlYuGNODwhg",
                    }
                },
            }
        }
    )
    const rev3 = await prisma.reviews.create(
        {
            data: {
                img: "https://s3-alpha-sig.figma.com/img/d01f/a778/a25b21bba99889d05a133a0a25fef9ee?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2BWUrsFTnNcABMrhc6Wfb-Y5pWLNbZmSRSSXtXuTqtMLdx8ZsUVREjJWmOhnzEzy8vZAYS~eDlRjXmZ8SIzTR0L74f1WQV5zxTNgfEjUaolx5oEADd7BM0I36h3NDwdzWpVXCSPM4cv7qfPSqoi7o7m9aihEuI6yVzzHnChcbdaLboyCBv5cQcgB~p8nQ8lIcU-s~7dvpDpscw6T8WhHs3RZVdwylo4xvaQiqQyOgwkWnRaJLNej2gu6vti654QNpQHr71IPDuRpWQ-iqs-od4E4EW3H~yLM-mKJV0qmsBoGD1KS3U~PkQygS53S4bEpB5nIY~MYh0~weOf8tfELw__",
                text: "Efood is super!;",
                name: "Review 1",
                status: "true",
                user: {
                    create: {
                        email: "email@email.email12",
                        name: "Michael Jordan12",
                        password: "$2a$10$AlXGr7dxsVKJIYy7aNEjBOIg9AOz4wTT3UTWpXgG0fRuq5PCiRPqq",
                        status: "Food Lover",
                        img: "https://yandex-images.clstorage.net/UWHJ96389/bd0d27k12uoQ/AhdJZW_T1CiDSFgySdl5nueBS8HoMvKzWcubI5x3BXoXLYnHOTY8nNSanyS--hD_GIzCUXuVmzBiL19o1A_OICZDjdFeBmF8si0YsnmJWEszsFoESHcjF3z-e6afwdddgHsOVA7BC2slbwqEu_v0SxxPZNUcs403ZEkrrLE4qQAD9_jnOgMk-eSqajPJekgqR-C6VejV0zANCJxgzzDlDwNp7ZZPEUrp1j4rJov5YPqebRZDDAIMlHeqaX1BmeoBknbKpHsApfokCojCSXm7SFdzaafbt2GynHtO4j-QBY1hO90lfHFJGWZ_6_RbKiPrD_43oa-R3GRGKylvgnhLoYMHuJfZQTcIxIrrYcroSJr0EUpUGNZiYD94vCPucMQNcOqMd17wC6tEvyhGuYozuT_u1fA_Es5m5gi4HEA6SGFh9blm-9GUOBS7KsLLSgmYNGHrJrhWoAHuiD2A_kI3_-D7rlaPEOmphB9apFqq4cssPfXxnvHMV4Z5K3zDehvzU4UZxpnDxzvEKbuzKLsaizWD6YXZtTNhX1nMYg0jhE9zyAwWLrBYi1X9WDY5iWDKDC8X0U-C_pbX6hp_odpYcEMWSndrgeZK1rqoEZm722kWc1uGSDaBMn7J7nEdYoTPIsiuBc7iOSi1r6kmayqiaE4eJUEMU_52RnjajOMKGRMTB8olGSCEeaWbatBayojaNlGIVnpn0LB8q25zjVF3L9I5nTVcYbsoRa1YpimYULpv3CdCnULMBXUou57CG1rzA_XYJikSR_vli5rgi_naO6ZQa-fbpYKzrYot489iF80DaK5UHoDqmxWcuBZJ6mAIf541E-2QfmaHGQnO4mpaUyM2eSTbAGUKxQvrIljoWytHMhomOHchYG5bj4NuQpUPgWvMF7ywaKnmfTt2eJtwSyx990ANAhx1pavq3oOKyQCx1SjWa8JVK_aqupE7W4o4VuJ65UhlYuGNODwhg",
                    }
                },
            }
        }
    )
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