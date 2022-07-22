const express = require("express");
const routes = express.Router();



routes.get("/usuarios",(req,res)=>{
    res.json({msg: "vemos plantilla inicial"});
})


routes.post("/crearUsuario",(req,res)=>{
   res.json({msg: "crear un usuario -POST",user: req.body});
})


routes.put("/editarUsuario",(req,res)=>{
    res.json({msg: "editar usuario -PUT"})
});


routes.delete("/eliminarUsuario",(req,res)=>{
   res.json({msg: "eliminar usuario -DELETE"})
})


module.exports = routes;