const { Router } = require("express")
const userRouter = Router()
const {listUsers, addUser} = require("./userControllers")

userRouter.get("/user", listUsers);
userRouter.post("/user", addUser);

module.exports = userRouter