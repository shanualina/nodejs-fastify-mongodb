const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true,
        // unique: true,
    },
    address: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    userName:{
        type: String,
        required: true,
        // unique: true,
    },
    password:{
        type: String,
        required: true
    }
}, {
    timestamps: true
})
// userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema)