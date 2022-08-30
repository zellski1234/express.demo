const express = require("express");
const app = express();
const port = process.env.PORT || 5000
const userRouter = require("./users/userRouter")
const movieRouter = require("./movies/movieRouter")

// app.use(express.static("public"))
app.use(express.json());
app.use(movieRouter);
// app.use(userRouter);


app.listen(port, () => {
	console.log(`listening on port ${port}`)
})