const mongoose = require("mongoose");


const usuarioModel = mongoose.Schema({
    nombr:{
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}) 



module.exports = mongoose.model("usuarios",usuarioModel);