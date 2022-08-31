const Movies = require("../db/movieModel");


exports.listMovies = async (req, res) => {
    try {
        let list = await Movies.find({})
        res.send(list)
    } catch {


    }
}

exports.addMovie = async (req, res) => {
    try {
        if (req.body.title && req.body.actor){
            console.log(req.body)
            await Movies.create({title: req.body.title, actor: req.body.actor});
            res.status(201).send({title: req.body.title, actor: req.body.actor});
        }
        else {
            console.log("no title or actor found")
            res.status(400).send({error: "no title or actor found"})
        }
    } catch (e) {
        console.log("error in add movie")
        res.status(500).send({error:"internal server error"})
        console.log(e)

    }
}