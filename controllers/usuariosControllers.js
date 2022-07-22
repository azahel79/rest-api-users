const bcryptjs = require("bcryptjs");
const { response } = require("express");
const { request } = require("express");
const { validationResult } = require("express-validator");
const usuarioModel = require("../model/usuarioModel");

exports.obtenerUsuarios = async(req = request,res= response)=>{
    try {
          const getUsers = await usuarioModel.find();
          res.json({users: getUsers});
    } catch (error) {
        return res.status(500).json({msg:"hubo un error"})
    }
 }

   
exports.crearUsuario = async(req = request,res= response)=>{
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty())  return res.status(500).json(errors.array());

            
            const userExisting = await usuarioModel.findOne({email: req.body.email});

            if(userExisting){
                return res.status(400).json({msg: "este usuario ya existe"});
            }
             
            req.body.password = await bcryptjs.hashSync(req.body.password,9);     
            // CREAR UN NUEVO USUARIO
            const newUser = new usuarioModel(req.body);
            await newUser.save();  
             res.json({user: newUser})

        } catch (error) {
            console.log(error);
           res.status(500).json({msg: "hubo un error"})
        }
 }
 



 exports.editarUsuario = (req = request,res= response)=>{
    res.json({msg: "editar usuario -PUT"})
 }

 exports.eliminarUsuario = (req = request,res= response)=>{
    res.json({msg: "eliminar usuario -DELETE"})
}

