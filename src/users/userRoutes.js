const { Router } = require("express")
const userRouter = Router()
// const {listUsers, listUsername, addUser, deleteUser, editUser} = require("./userControllers")
const { addUser, login } = require("./userControllers")
const {hashPassword} = require("../middleware/index")


// ---------------------- create ----------------------
userRouter.post("/user/signup",[hashPassword], addUser);
userRouter.post("/user/login", login);
        
// ---------------------- read ----------------------
// userRouter.get("/user", listUsers);
// userRouter.get("/user/username", listUsername);

// ---------------------- update ----------------------
// userRouter.put("/user", editUser);

// ---------------------- delete ----------------------
// userRouter.delete("/user", deleteUser);


module.exports = userRouter