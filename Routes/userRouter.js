const userController = require("../Controllers/user.controller"); 
const bodyValidatorMiddleware = require('../Middlewares/bodyValidator.middleware'); 

const userRouter = require('express').Router(); 

userRouter.route('/')
.get(userController.getAll)
.post(bodyValidatorMiddleware(), userRouter.insert)

userRouter.route('/:id')

