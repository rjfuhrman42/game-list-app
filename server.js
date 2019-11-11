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


app.post('/api', (request, response) => {
    const data = request.body
    console.log(request.body)
    database.insert(data);
    response.json(data);
})

app.post('/api/:name-:rating', (request, response) => {
    const data = request.body
    const {name, rating} = request.params;
    console.log(name)
    database.update({ name: name }, { $set: { userRating: rating }})
    response.json(data);
})