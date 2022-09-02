const { Router } = require("express")
const movieRouter = Router()
const {listMovies, listTitles, listActors, listActor, listMovie, 
        addMovie, deleteMovie, editMovie} = require("./movieControllers")
const { tokenCheck } = require("../middleware");

// ---------------------- create ----------------------
movieRouter.post("/movie", [tokenCheck], addMovie);

// ---------------------- read ----------------------
movieRouter.get("/movie", listMovies);
movieRouter.get("/movie/titles", listTitles);
movieRouter.get("/movie/title", listMovie);
movieRouter.get("/movie/actor", listActor);
movieRouter.get("/movie/actors", listActors);

// ---------------------- update ----------------------
movieRouter.put("/movie", [tokenCheck], editMovie)

// ---------------------- delete ----------------------
movieRouter.delete("/movie", [tokenCheck], deleteMovie)

module.exports = movieRouter