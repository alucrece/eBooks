const express = require('express');
const router = express.Router();
const Room = require('../models/Room');

// Create a new chat room
router.post('/', (req, res) => {
    const { title } = req.body;
    // Insert the chat room into the database
    Room.create({ title }, (err, Room) => {
        if (err) return res.status(500).send(err);
        return res.json(Room);
    });
});

// Get all chat rooms
router.get('/', (req, res) => {
    console.log("result req",typeof req.query.name)
    Room.find({title: {
        $regex: req.query.name || /.*/
    }}, (err, Room) => {
        if (err) return res.status(500).send(err);
        return res.json(Room);
    });
});

// Get a specific chat room
router.get('/:id', (req, res) => {
    Room.findById(req.params.id, (err, Room) => {
        if (err) return res.status(500).send(err);
        if (!Room) return res.status(404).send('No chat room found.');
        return res.json(Room);
    });
});

// Update a specific chat room
router.put('/:id', (req, res) => {
    Room.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, Room) => {
        if (err) return res.status(500).send(err);
        return res.json(Room);
    });
});

// Delete a specific chat room
router.delete('/:id', (req, res) => {
    Room.findByIdAndRemove(req.params.id, (err, Room) => {
        if (err) return res.status(500).send(err);
        return res.json(Room);
    });
});

module.exports = router;