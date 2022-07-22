const moongose = require("mongoose");

exports.coneccionDB = async()=>{
    try {
        await moongose.connect(process.env.MONGODB_CNN);
        console.log("conectada la base de datos");
    } catch (error) {
           console.log(error);
        throw new Error("no se conecto la base de datos");
    }
}