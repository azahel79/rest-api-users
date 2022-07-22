const express = require("express");
const { crearUsuario, obtenerUsuarios, editarUsuario, eliminarUsuario } = require("../controllers/usuariosControllers");
const routes = express.Router();



routes.get("/usuarios",obtenerUsuarios)


routes.post("/crearUsuario",crearUsuario)


routes.put("/editarUsuario",editarUsuario);


routes.delete("/eliminarUsuario",eliminarUsuario)


module.exports = routes;