const boom = require('boom')
const cityModel = require("../model/cityModel")
// get all post 
exports.getAllCity = async (req, reply) => {
    try {
        let city = await cityModel.find();
        return city;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSingleCity = async (req, reply) => {
    try {
        const id = req.params.id
        let city = await cityModel.findById(id);
        return city
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addCity = async (req, res, reply) => {
    try {
        let city = new cityModel(req.body);
        let newpost = await city.save();
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
exports.updateCity = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await cityModel.findByIdAndUpdate(id, req.body, {
            new: true
        });
        return ({
            message: "updated Succssfully",
            status: 200
        })
    } catch (err) {
        throw boom.boomify(err)
    }
}
