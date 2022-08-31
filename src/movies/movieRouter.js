const { Router } = require("express")
const movieRouter = Router()
const {listMovies, addMovie, deleteMovie, editMovie} = require("./movieControllers")

movieRouter.get("/movie", listMovies);
movieRouter.post("/movie", addMovie);
movieRouter.delete("/movie", deleteMovie)
movieRouter.put("/movie", editMovie)

module.exports = movieRouter