const express = require('express');

const db = require('../data/dbConfig.js');
const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

server.get('/games', async (req, res) => {
    try {
        const games = await db('games');
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/games', async (req, res) => {
    try {
        const { title, genre, releaseYear} = req.body;
        if(title && genre){
            const [id] = await db('games').insert(req.body);
            const game = await db('games').where({ id }).first();
            res.status(200).json(game);
        } else {
            res.status(422).json({ message: "Missing required field." });
        }
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = server;