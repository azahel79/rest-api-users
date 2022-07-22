const  {coneccionDB} = require("../db/conectarDb");



class App {

    constructor(){
        this.express = require("express");
        this.app = this.express();
        this.dotenv = require("dotenv").config();
        this.cors = require("cors");
         
    }

    controllers(){
        this.app.set("port",process.env.PORT);
    }

    middlewares(){
        this.app.use(this.express.json());
        this.app.use(this.express.urlencoded({extended: false}));
        this.app.use(this.cors());
        this.app.use(this.express.static("../public"));
    }


    conectarDB(){
       coneccionDB();
    }

    servidores(){
        this.app.use("/",require("../router/routes"));
    }


    listen(){
      this.app.listen(this.app.get("port"),()=>{
        console.log(`server in port -> http://localhost:${this.app.get("port")}`);
      })
    }
   
}
module.exports = App;