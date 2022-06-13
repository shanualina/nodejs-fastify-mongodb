const mongoose = require('mongoose')
const stateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    countyId:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('state', stateSchema)