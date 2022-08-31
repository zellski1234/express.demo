const { Router } = require("express")
const movieRouter = Router()
const {listMovies, listTitles, listActors, listMovie, 
        addMovie, deleteMovie, editMovie} = require("./movieControllers")

// ---------------------- create ----------------------
movieRouter.post("/movie", addMovie);

// ---------------------- read ----------------------
movieRouter.get("/movie", listMovies);
movieRouter.get("/movie/titles", listTitles);
movieRouter.get("/movie/title", listMovie);
movieRouter.get("/movie/actors", listActors);

// ---------------------- update ----------------------
movieRouter.put("/movie", editMovie)

// ---------------------- delete ----------------------
movieRouter.delete("/movie", deleteMovie)

module.exports = movieRouter