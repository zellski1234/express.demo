const Movies = require("./movieModel");

// ---------------------------------------------------- List Movie ----------------------------------------------------
exports.listMovie = async (req, res) => {
    try {
        let movieList = await Movies.find({});
        if (movieList.length > 0){
            console.log("inside listMovie")
            res.status(200).send({movieList});
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
// ---------------------------------------------------- Add Movie ----------------------------------------------------
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
// ---------------------------------------------------- Delete Movie ----------------------------------------------------
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
// ---------------------------------------------------- Edit Movie ----------------------------------------------------
exports.editMovie = async (req, res) => {
    try {
        await Movies.updateOne({ title: req.body.title, actor: req.body.actor }, { title: req.body.titleR, actor: req.body.actorR })
        res.status(200).send(await Movies.find({}))
    } catch (e) {

        console.log("error in edit Movie")
        res.status(500).send({error:"internal server error"})
        console.log(e)
    }

}