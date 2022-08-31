const Movies = require("./movieModel");

// --------------------------------------------------- List Movie ----------------------------------------------------
exports.listMovies = async (req, res) => {
    try {
        let movieList = await Movies.find({});
        if (movieList.length > 0){
            console.log("inside listMovie")
            res.status(200).send(movieList);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listMovie")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
exports.listTitles = async (req, res) => {
    try {
        let movieList = await Movies.find({});
        if (movieList.length > 0){
            console.log("inside listTitles")
            let title = []
            for(let i = 0; i < movieList.length; i++){
                title.push(i+1, movieList[i].title)
            }
            res.status(200).send(title);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listTitles")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
exports.listActors = async (req, res) => {
    try {
        let movieList = await Movies.find({});
        if (movieList.length > 0){
            console.log("inside listActors")
            let title = []
            for(let i = 0; i < movieList.length; i++){
                title.push(i+1, movieList[i].actor)
            }
            res.status(200).send(title);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listActors")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
exports.listMovie = async (req, res) => {
    try {
        let movieTitle = await Movies.find({title: req.query.title});
        if (movieTitle.length === 0){
            res.status(404).send({message: "Movie not found"})
            console.log(movieTitle + " Movie not found")
        }
        else if (movieTitle.length > 0){
            console.log(movieTitle + " inside listMovie")
            res.status(200).send(movieTitle);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listMovie")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
exports.listActor = async (req, res) => {
    try {
        let movieTitle = await Movies.find({actor: req.query.actor});
        if (movieTitle.length === 0){
            res.status(404).send({message: "Actor not found"})
            console.log(movieTitle + " Actor not found")
        }
        else if (movieTitle.length > 0){
            console.log(movieTitle + " inside listActor")
            res.status(200).send(movieTitle);
        }
        else {
            console.log("Nothing to display")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in listActor")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
// --------------------------------------------------- Add Movie ----------------------------------------------------
exports.addMovie = async (req, res) => {
    try {
        if (req.body.title && req.body.actor){
            console.log(req.body)
            await Movies.create({title: req.body.title, actor: req.body.actor});
            res.status(201).send(await Movies.find({}));
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
// ------------------------------------------------- Delete Movie --------------------------------------------------
exports.deleteMovie = async (req, res) => {
    try {
        let movieList = await Movies.find({})
        if ((req.body.title && req.body.actor) && movieList.length > 0){
            await Movies.deleteOne({ title: req.body.title, actor: req.body.actor })
            res.status(200).send(await Movies.find({}))
        }
        else {
            console.log("Nothing to delete")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in deleteMovie")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }
}
// -------------------------------------------------- Edit Movie --------------------------------------------------
exports.editMovie = async (req, res) => {
    try {
        let movieList = await Movies.find({})
        if(movieList.length > 0){
            await Movies.updateOne(
                { title: req.body.title, actor: req.body.actor }, 
                { title: req.body.newT, actor: req.body.newA })
            res.status(200).send(await Movies.find({}))
        }
        else {
            console.log("Nothing to edit")
            res.status(400).send({error: "request failed"})
        }
    } catch (e) {
        console.log("error in edit Movie")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }

}