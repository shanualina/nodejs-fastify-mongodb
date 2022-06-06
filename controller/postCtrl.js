const boom = require('boom')
const Post = require("../model/post")
// get all post 
exports.getAllPost = async (req, reply) => {
    try {
        let posts = await Post.find();
        return posts;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSinglePost = async (req, reply) => {
    try {
        const id = req.params.id
        let post = await Post.findById(id);
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addNewPost = async (req, res, reply) => {
    try {
        let post = new Post(req.body);
        let newpost = await post.save();
        if (newpost) {
            return reply.send({
                message: "added Succssfully",
                status: 201
            })
        }
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.updatePost = async (req, res, reply) => {
    try {
        const id = req.params.id
        let result = await Post.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return res.send('hello')
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.deletePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await Post.findByIdAndDelete(
            id
        );
        return { Message: "Post Deleted" }
    } catch (err) {
        throw boom.boomify(err)
    }
}