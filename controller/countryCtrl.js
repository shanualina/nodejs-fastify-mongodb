const boom = require('boom')
const countryModel = require("../model/countryModel")
// get all post 
exports.getAllCountry = async (req, reply) => {
    try {
        let country = await countryModel.find();
        return country;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSingleCounty = async (req, reply) => {
    try {
        const id = req.params.id
        let country = await countryModel.findById(id);
        return country
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addCounty = async (req, res, reply) => {
    try {
        let country = new countryModel(req.body);
        let newpost = await country.save();
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
exports.updateCountry = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await countryModel.findByIdAndUpdate(id, req.body, {
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
