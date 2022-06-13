const boom = require('boom')
const stateModel = require("../model/stateModel")
// get all post 
exports.getAllState = async (req, reply) => {
    try {
        let state = await stateModel.find();
        return state;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single post by id 
exports.getSingleState = async (req, reply) => {
    try {
        const id = req.params.id
        let state = await stateModel.findById(id);
        return state
    } catch (err) {
        throw boom.boomify(err)
    }
}
exports.addState = async (req, res, reply) => {
    try {
        let state = new stateModel(req.body);
        let newpost = await state.save();
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
exports.updateState = async (req, reply) => {
    try {
        const id = req.params.id
        let result = await stateModel.findByIdAndUpdate(id, req.body, {
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
//get all state by coutry id
exports.getAllStateByCountyId = async (req, reply) => {
    try {
        const countrId = req.params.countrId
        let state = await stateModel.find({ countrId: countrId });
        return state
    } catch (err) {
        throw boom.boomify(err)
    }
}
