const userRouter = require('./userRouter');


const router = require('express').Router(); 

router.get('/',(req,res)=>{
    res.send("Bienvenue sur l'API", 200)
}); 

router.use('/user', userRouter); 

module.exports = router; 