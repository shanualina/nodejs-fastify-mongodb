const blogController = require('../controller/postCtrl');
const routes = [{
        method: 'GET',
        url: '/api/allpost',
        handler: blogController.getAllPost
    },
    {
        method: 'GET',
        url: '/api/post/:id',
        handler: blogController.getSinglePost
    },
    {
        method: 'POST',
        url: '/api/post',
        handler: blogController.addNewPost,
    },
    {
        method: 'POST',
        url: '/api/post/:id',
        handler: blogController.updatePost
    },
    {
        method: 'DELETE',
        url: '/api/post/:id',
        handler: blogController.deletePost
    }
]
module.exports = routes