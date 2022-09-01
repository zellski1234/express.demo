const bcrypt = require("bcryptjs")

exports.hashPassword = async (req, res, next) => {
    try {
        if("password" in req.body){
            const hashedPassword = await bcrypt.hash(req.body.password, 8)
            req.body.password = hashedPassword
            next()
        } else {
            throw new Error("No password provided")
        }
    } catch (error) {
        res.status(500).send({error: error.message})

    }

}