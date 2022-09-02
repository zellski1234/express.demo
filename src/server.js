const express = require("express");
const app = express();
const port = process.env.PORT || 5000


// app.use(express.static("public"))

app.get("/", (req, res)=> {
	res.send("Hi my name is Dan")

});

app.get("/hello", (req, res)=> {
	console.log(req.query.name)

	if (req.query.name){
		res.send({ name: req.query.name});
	}
	else {
		res.send({error: "no name found"})
	}
});

app.get("/myinfo", (req, res)=> {
	res.send({
		name: "Hamza",
		age: "25"});
});

app.get("/users/:id", (req, res)=> {
	console.log(req.params.id)
	
	res.send({id: req.params.id})
});


app.listen(port, () => {
	console.log(`listening on port ${port}`)
})
// http://localhost:5000/hello?name=dan&age=35&somethingelse