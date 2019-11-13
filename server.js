const express = require('express');
const Datastore = require('nedb');
const bodyParser = require('body-parser')

const app = express();
const fetch = require('node-fetch');
const port = process.env.PORT || 5000;
require('dotenv').config();


app.listen(port, () => console.log(`listening on port ${port}`));
app.use(bodyParser.json())
const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
    console.log("requested!")
    database.find({}, (err, data) => {
        if (err) throw err
        response.json(data);
    })
})

app.get('/api/:name', (request, response) => {
    console.log("requested!");
    const {name} = request.params;
    database.find({name: name}, (err, data) => {
        if (err) throw err
        response.json(data);
    })
})

app.get('/rawg/:term', async (request, response) => {

    const {term} = request.params;
    const api_url = `https://api.rawg.io/api/games?search=${term}`;

    const games = await fetch(api_url,
    {
        headers : {
            'User-Agent': 'games-list-app / personal use project'
    }});

    const data = await games.json();
    response.json(data);

})


app.post('/api/:name', (request, response) => {
    const data = request.body
    const {name} = request.params;
    console.log("we're")
    database.find({name: name}, function (err, docs){

        if(docs[0] === undefined) // if the game is not in the database, add it
        {
            database.insert(data);
        }
        else console.log("game already added!");
    })
    response.json(data);
})

app.post('/edit/:name/:rating', (request, response) => {
    const data = request.body
    const {name, rating} = request.params;
    console.log(name)
    database.update({ name: name }, { $set: { userRating: rating }})
    response.json(data);
})