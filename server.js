const express = require('express');
const app = express();
const fetch = require('node-fetch')
const port = process.env.PORT || 5000;
require('dotenv').config();

app.listen(port, () => console.log(`listening on port ${port}`));

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