const Movies = require("../db/movieModel");


exports.listMovies = (req, res) => {
    let list = await Movies.find({})
    res.send(list)
}

exports.addMovie = async (req, res) => {
    await Movies.create({title: req.body.title, actor: req.body.actor});
    res.status(201).send({title: req.body.title, actor: req.body.actor})
}