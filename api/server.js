const express = require('express');

const db = require('../data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: "working" });
});

server.get('/users', async (req, res) => {
    try{
        const users = await db('users');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.post('/users', async (req, res) => {
    try {
        const [id] = await db('users').insert(req.body);
        const user = await db('users').where({ id }).first();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

server.delete('/users/:id', async (req, res) => {
    try {
        const count = await db('users').where({ id: req.params.id }).delete();
        res.status(200).json(count);
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = server;