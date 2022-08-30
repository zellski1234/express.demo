const { Router } = require("express")
const movieRouter = Router()
const {listMovies, addMovie} = require("./movieControllers")

movieRouter.get("/movie", listMovies);
movieRouter.post("/movie", addMovie);

module.exports = movieRouter