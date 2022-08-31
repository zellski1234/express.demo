const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const userRouter = require("./users/userRouter")
const movieRouter = require("./movies/movieRouter")
require("./db/connection");

// app.use(express.static("public"))
app.use(express.json());
app.use(movieRouter);


app.listen(port, () => {
	console.log(`listening on port ${port}`)
})