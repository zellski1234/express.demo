const Users = require("./userModel");

// --------------------------------------------------- List user ----------------------------------------------------
exports.listUsers = async (req, res) => {
    try {
        let UserList = await Users.find({});
        if (UserList.length > 0){
            console.log("inside listUsers")
            res.status(200).send(UserList);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listUsers")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
exports.listUsername = async (req, res) => {
    try {
        let userList = await Users.find({});
        if (userList.length > 0){
            console.log("inside listUsername")
            let username = []
            for(let i = 0; i < userList.length; i++){
                username.push(i+1, userList[i].username)
            }
            res.status(200).send(username);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listUsername")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
// --------------------------------------------------- Add user ----------------------------------------------------
exports.addUser = async (req, res) => {
    try {
        if (req.body.username && req.body.password){
            console.log(req.body)
            await Users.create({username: req.body.username, password: req.body.password});
            res.status(201).send(await Users.find({}));
        }
        else {
            console.log("requires username and password")
            res.status(400).send({error: "requires username and password"})
        }
    } catch (e) {
        console.log("error in add user")
        res.status(500).send({error:"internal server error"})
        console.log(e)

    }
}
// ------------------------------------------------- Delete user --------------------------------------------------
exports.deleteUser = async (req, res) => {
    try {
        let userList = await Users.find({})
        if ((req.body.username && req.body.password) && userList.length > 0){
            await Users.deleteOne({ username: req.body.username, password: req.body.password })
            res.status(200).send(await Users.find({}))
        }
        else {
            console.log("Nothing to delete")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in deleteUser")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
// -------------------------------------------------- Edit user --------------------------------------------------
exports.editUser = async (req, res) => {
    try {
        let userList = await Users.find({})
        if(userList.length > 0) {
            await Users.updateOne(
                { username: req.body.username, password: req.body.password }, 
                { password: req.body.newP })
            res.status(201).send(await Users.find({}))
        }
        else {
            console.log("Nothing to edit")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in edit user")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }

}