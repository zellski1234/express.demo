const Movies = require("../db/movieModel");


exports.listMovies = (req, res) => {
    let list = await Movies.find({})
    res.send(list)
}

exports.addMovie = async (req, res) => {
    await Movies.create({title: res.query.title, actor: res.query.actor});
    res.status(201).send({title: res.query.title, actor: res.query.actor})
}