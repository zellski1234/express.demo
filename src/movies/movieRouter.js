const { Router } = require("express")
const movieRouter = Router()
const {listMovies, listTitles, listActors, 
        addMovie, deleteMovie, editMovie} = require("./movieControllers")

// ---------------------- list ----------------------
movieRouter.get("/movie", listMovies);
movieRouter.get("/movie/titles", listTitles);
movieRouter.get("/movie/actors", listActors);

movieRouter.post("/movie", addMovie);
movieRouter.delete("/movie", deleteMovie)
movieRouter.put("/movie", editMovie)

module.exports = movieRouter