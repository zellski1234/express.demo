

exports.listUsers = (req, res) => {
    res.send({message: "listing all users"})
}

exports.addUser = (req, res) => {
    res.status(201).send({message:"listing all users"})
}