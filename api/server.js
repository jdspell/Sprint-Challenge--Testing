const express = require('express');

const db = require('../data/dbConfig.js');
const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

module.exports = server;