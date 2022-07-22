const App = require("./app/Server");

const aplicacion = new App();

aplicacion.controllers();
aplicacion.middlewares();
aplicacion.servidores();
aplicacion.listen();