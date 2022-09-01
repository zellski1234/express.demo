const User = require("./userModel");
// --------------------------------------------------- Add User ----------------------------------------------------
exports.addUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save();
        res.status(201).send({ user: newUser.name });
    } catch (e) {
        res.status(500).send({error: "Oops"});
    };
}

exports.login = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.findByCredentials(email, password);
        res.status(200).send({ user: user.name });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};
