const { response } = require("express");
const { request } = require("express");

exports.obtenerUsuarios = (req = request,res= response)=>{
    res.json({msg: "vemos plantilla inicial"});
 }


exports.crearUsuario = (req = request,res= response)=>{
    res.json({msg: "crear un usuario -POST",user: req.body});
 }
 



 exports.editarUsuario = (req = request,res= response)=>{
    res.json({msg: "editar usuario -PUT"})
 }

 exports.eliminarUsuario = (req = request,res= response)=>{
    res.json({msg: "eliminar usuario -DELETE"})
}

