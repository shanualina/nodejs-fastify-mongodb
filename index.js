const fastify = require('fastify');
const PORT = process.env.PORT || 3000;
const db = require("./config/db")
const routes = require("./routes/postRoutes")
const UersRoutes = require("./routes/userRoutes");
const multer = require('fastify-multer') // or import multer from 'fastify-multer'
const upload = multer({ dest: 'uploads/' })
const app = fastify({
    logger: true
})

app.register(db)
app.register(multer.contentParser)


routes.forEach((route, index) => {
    app.route(route)
})
UersRoutes.forEach((route, index) => {
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