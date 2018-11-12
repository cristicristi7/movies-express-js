const { app, port } = require("config/express");
//const Movie = require("models/movie.model");
const bodyIsEmpty = require("utils/bodyIsEmpty");
const idExists = require("utils/idExists");
const _ = require("lodash");

// Movies Data
const movies = require("data/movies");

// API
app.get("/", (req, res) => {
    res.json(movies);
});

app.post("/movies", (req, res) => {
    if (bodyIsEmpty(req.body)) {
        res.status(400).send("Oops, you have to pass something as Body");
    } else {
        const newMovie = req.body;
        newMovie.id = _.random(0,100);
        movies.push(newMovie);
        //let newMovie = new Movie(_.random(0,100), ........);

        res.json({
            message: 'New Movie added!',
            newMovie
        });
    }
});

// Listen
app.listen(port, () => {
    console.log("Express running on port 3001.");
});