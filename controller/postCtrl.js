const boom = require('boom')
const post = require("../model/post")
// get all post 
exports.getAllPost = async (req, reply) => {
    try {
        let posts = await post.find();
        return posts;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSinglePost = async (req, reply) => {
    try {
        const id = req.params.id
        let post = await post.findById(id);
        return post
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addNewPost = async (req, reply) => {
    try {
        let post = new Blog(req.body);
        let newpost = await post.save();
        return newpost
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.updatePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await post.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return result
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.deletePost = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await post.findByIdAndDelete(
            id
        );
        return {Message:"Post Deleted"}
    } catch (err) {
        throw boom.boomify(err)
    }
}