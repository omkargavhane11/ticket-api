const express = require('express');
const router = express.Router();
const Message = require("../Models/messageModel");


// create message
router.post("/", async (req, res) => {
    try {
        const newMsg = await Message.create(req.body);
        res.status(200).send("Msg created successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// get all messages of query
router.get("/:queryId", async (req, res) => {
    try {
        const allMsg = await Message.find({ queryId: req.params.queryId });
        res.status(200).send(allMsg);
    } catch (error) {
        res.status(500).send(error.message);
    }
})


module.exports = router;