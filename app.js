const express = require('express');
const server = express();
 const { PORT, DB_CONNECTION } = process.env;

 server.use(express.json()); 

 const LogMiddleware = require("./Middlewares/log.middleware"); 
 server.use(express.json()); 
 
 
 const mongoose = require("mongoose"); 
server.use(async (req, res, next)=>{
    try{
        await mongoose.connect(DB_CONNECTION, { dbName : 'CherryClothesDB'}); 
        console.log("connecté avec succès à la db"); 

        next(); 
    }catch(err){
        console.log(`connection ratée \n[Reason]\n ${err}`);
        
        res.status(500).json( {statusCode : 500 , message : 'connexion à la db impossible'}); 
    }
}); 
const router = require("./Routes/app"); 
server.use('/api', router)

server.listen(PORT, ()=>{
    console/log(`Server démarré au port ${PORT}`)
})