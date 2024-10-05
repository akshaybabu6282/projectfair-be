//1) import mongoose
const mongoose = require('mongoose');

//2) create schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    github: {
        type: String
    },
    linkedin: {
        type: String
    },
    profile: {
        type: String
    }
})

//3) create modal
//mongoose.modal() - model is used to create model, it accept two arrguments
    //1) name of the collection that needs to map with this model
    //2) the schema created
const users = mongoose.model("users", userSchema)

//4) export the modal
module.exports = users;