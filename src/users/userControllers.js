const User = require("./userModel");


// --------------------------------------------------- List User ----------------------------------------------------
// exports.listUsers = async (req, res) => {
//     try {
//         let UserList = await Users.find({});
//         if (UserList.length > 0){
//             console.log("inside listUsers")
//             res.status(200).send(UserList);
//         }
//         else {
//             console.log("Nothing to display")
//             res.status(400).send({error: "request failed"})
//         }
//     } catch (e) {
//         console.log("error in listUsers")
//         res.status(500).send({error:"internal server error"})
//         console.log(e)
//     }
// }
// exports.listUsername = async (req, res) => {
//     try {
//         let userList = await Users.find({});
//         if (userList.length > 0){
//             console.log("inside listUsername")
//             let username = []
//             for(let i = 0; i < userList.length; i++){
//                 username.push(i+1, userList[i].username)
//             }
//             res.status(200).send(username);
//         }
//         else {
//             console.log("Nothing to display")
//             res.status(400).send({error: "request failed"})
//         }
//     } catch (e) {
//         console.log("error in listUsername")
//         res.status(500).send({error:"internal server error"})
//         console.log(e)
//     }
// }
// --------------------------------------------------- Add User ----------------------------------------------------
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const token = await newUser.generateAuthToken();
        await newUser.save();
        res.status(201).send({ user: newUser.name, token });
    } catch (error) {
        if (error.code === 11000){
            res.status(409).send({error: "Email already exists!"});
        } 
        else {
            res.status(500).send({error: "Oops"});
        }
    };
}

exports.login = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findByCredentials(email, password);
        const token = user.generateAuthToken();
        res.status(200).send({ user: user.name, token});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
// ------------------------------------------------- Delete User --------------------------------------------------
// exports.deleteUser = async (req, res) => {
//     try {
//         let userList = await Users.find({})
//         if ((req.body.username && req.body.password) && userList.length > 0){
//             await Users.deleteOne({ username: req.body.username, password: req.body.password })
//             res.status(200).send(await Users.find({}))
//         }
//         else {
//             console.log("Nothing to delete")
//             res.status(400).send({error: "request failed"})
//         }
//     } catch (e) {
//         console.log("error in deleteUser")
//         res.status(500).send({error:"internal server error"})
//         console.log(e)
//     }
// }
// -------------------------------------------------- Edit User --------------------------------------------------
// exports.editUser = async (req, res) => {
//     try {
//         let userList = await Users.find({})
//         if(userList.length > 0) {
//             await Users.updateOne(
//                 { username: req.body.username, password: req.body.password }, 
//                 { password: req.body.newP })
//             res.status(201).send(await Users.find({}))
//         }
//         else {
//             console.log("Nothing to edit")
//             res.status(400).send({error: "request failed"})
//         }
//     } catch (e) {
//         console.log("error in edit user")
//         res.status(500).send({error:"internal server error"})
//         console.log(e)
//     }

// }