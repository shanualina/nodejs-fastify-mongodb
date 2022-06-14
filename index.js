const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const db = require("./config/db")
const routes = require("./routes/postRoutes")
const UersRoutes = require("./routes/userRoutes");
const countryRoutes = require("./routes/countryRoutes");
const stateRoutes = require("./routes/stateRoutes");
const cityRoutes = require("./routes/cityRoutes");
const path = require('path')
const multer = require('fastify-multer') // or import multer from 'fastify-multer'

const app = fastify({
    logger: true
})

app.register(db)
app.register(multer.contentParser);
app.register(require('fastify-static'), {
     root: path.join(__dirname, 'uploads'),
    prefix: '/publics/',
})
app.register(require('@fastify/cors'), {
    origin: "*",
    corsOptions: 200
})
routes.forEach((route, index) => {
    app.route(route)
})
UersRoutes.forEach((route, index) => {
    app.route(route)
})
countryRoutes.forEach((route, index) => {
    app.route(route)
})
stateRoutes.forEach((route, index) => {
    app.route(route)
})
cityRoutes.forEach((route, index) => {
    app.route(route)
})

app.get("/", async () => {
    return {
        Message: "Fastify is On Fire"
    }
})

const start = async () => {
    try {
        await app.listen(PORT)
        app.log.info(`server listening on ${app.server.address().port}`)

    } catch (err) {
        app.log.error(err)
        process.exit(1)

    }
}
start();