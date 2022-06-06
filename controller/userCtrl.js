const boom = require('boom');
const UserModel = require("../model/user.model");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

//get all user
exports.getAllUser = async (req, reply) => {
    try {
        let users = await UserModel.find();
        return users;
    } catch (err) {
        throw boom.boomify(err)
    }
}
// get single user by id 
exports.getSingleUser = async (req, reply) => {
    try {
        const id = req.params.id
        let user = await UserModel.findById(id);
        return user;
    } catch (err) {
        throw boom.boomify(err)
    }
}
//add new user
exports.addNewUser = async (req, res, reply) => {
    try {
        let user = new UserModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            dob: req.body.dob,
            gender: req.body.gender,
            mobileNo: req.body.mobileNo,
            address: req.body.address,
            profileImage: 'user.png',
            status: req.body.status,
            userName: req.body.userName,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        let newuser = await user.save();
        if (newuser) {
            return ({
                message: "user created Succssfully",
                status: 201
            })
        }
    } catch (err) {
        throw boom.boomify(err)
    }
}
//update user by id
// var uploadImage = multer(imagesUpload).single('image');

exports.updateUser = async (req, reply) => {
    try {
        const id = req.params.id;
        if (req.file) {
            console.log(req.file)
            let userresults = await UserModel.findByIdAndUpdate(id, {
                profileImage: 'images/' + req.file.filename
            }, {
                new: true
            });
            return ({
                status: 200,
                message: " profile update successfully"
            });
        }
        else {
            let userresults = await UserModel.findByIdAndUpdate(id, req.body, {
                new: true
            });
            return ({
                status: 200,
                message: " profile update successfully"
            });
        }

    } catch (err) {
        throw boom.boomify(err)
    }
}
//delete user by id
exports.deleteUser = async (req, reply) => {
    try {
        const id = req.params.id
        let userResults = await UserModel.findByIdAndDelete(
            id
        );
        return { Message: "Post Deleted" }
    } catch (err) {
        throw boom.boomify(err)
    }
}
//user login
exports.loginUser = async (req, reply) => {
    try {
        let userExits = await UserModel.findOne({
            userName: req.body.userName,
            status: 1,
        });
        if (userExits) {
            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                userExits.password
            );
            if (!passwordIsValid) {
                return ({
                    status: 401,
                    message: 'invalid password'
                });
            }
            else {
                var token = jwt.sign({ id: userExits._id }, 'test-code', { expiresIn: "12d" });
                return ({
                    status: 200,
                    token: token
                });
            }
        }
        else {
            return ({
                status: 404,
                message: 'Invalid username'
            });
        }
    } catch (err) {
        throw boom.boomify(err)
    }
}






