EFood - сайт доставки еды
===

Команды для консоли:
--- 

- Для установки fastify

`npm init fastify`

- Для установки дополнительный модулей

`npm i`

- Для запуска миграций

`npx prisma migrate dev --name init`

- Для создания таблиц и посева (если при команде выше этого не произошло)

`npx prisma db seed`

- Для запуска сервера

`npm start`

За что отвечают файлы:
---

1. node_modules (папка) - модули fastify
2. prisma (папка) - таблицы/схемы БД с описанием связей
3. index.js - объявление fastify и CORS
4. seed.ts - посев (стартовые данные)
5. db.js - подключение к БД
6. routes.js - запросы к БД