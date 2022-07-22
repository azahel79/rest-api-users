const express = require("express");
const { check } = require("express-validator");
const { crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario } = require("../controllers/usuariosControllers");
const usuarioModel = require("../model/usuarioModel");
const routes = express.Router();



routes.get("/usuarios",obtenerUsuarios)


routes.post("/crearUsuario",[
    check("nombre","nombre min: 3 caracteres").isLength({min: 3}),
    check("email","escribe un email valido").isEmail(),
    check("email").custom(async(email = "")=>{
           const userExisting = await usuarioModel.findOne({email});
           if(userExisting){
                throw new Error("este usuario ya existe");
           }
    }),
    check("password","contraseña min: 5 caracteres").isLength({min: 5})
],crearUsuario)


routes.put("/editarUsuario",editarUsuario);


routes.delete("/eliminarUsuario",eliminarUsuario)
     

module.exports = routes;