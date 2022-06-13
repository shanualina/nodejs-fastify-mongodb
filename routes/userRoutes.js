const userController = require('../controller/userCtrl');
const multer = require('fastify-multer') // or import multer from 'fastify-multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })
const routes = [{
    method: 'GET',
    url: '/api/alluser',
    handler: userController.getAllUser
},
{
    method: 'GET',
    url: '/api/user/:id',
    handler: userController.getSingleUser
},
{
    method: 'POST',
    url: '/api/user',
    preHandler: upload.single('image'),
    handler: userController.addNewUser,
},
{
    method: 'POST',
    url: '/api/user/:id',
    preHandler: upload.single('image'),
    handler: userController.updateUser
},
{
    method: 'POST',
    url: '/api/user/login',
    handler: userController.loginUser
},
{
    method: 'DELETE',
    url: '/api/user/:id',
    handler: userController.deleteUser
}
]
module.exports = routes