const { Router } = require("express")
const userRouter = Router()
const {listUsers, listUsername, addUser, deleteUser, editUser} = require("./userControllers")

// ---------------------- create ----------------------
userRouter.post("/user", addUser);
        
// ---------------------- read ----------------------
userRouter.get("/user", listUsers);
userRouter.get("/user/username", listUsername);

// ---------------------- update ----------------------
userRouter.put("/user", editUser);

// ---------------------- delete ----------------------
userRouter.delete("/user", deleteUser);


module.exports = userRouter