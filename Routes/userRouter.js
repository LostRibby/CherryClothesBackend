const userController = require("../Controllers/user.controller"); 
const authentificationMiddleware = require('../Middlewares/bodyValidator.middleware'); 

const userRouter = require('express').Router(); 

userRouter.route('/')
.get( authentificationMiddleware(),userController.getAll)


module.exports = userRouter;