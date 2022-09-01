const { Router } = require("express")
const userRouter = Router()
const { addUser, login } = require("./userControllers")
const {hashPassword} = require("../middleware/index")


// ---------------------- create ----------------------
userRouter.post("/user/signup",[hashPassword], addUser);
userRouter.post("/user/login", login);
        


module.exports = userRouter