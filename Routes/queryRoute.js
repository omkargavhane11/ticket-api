const express = require('express');
const router = express.Router();
const Query = require("../Models/queryModel");
const User = require('../Models/userModel');
const Message = require('../Models/messageModel');
// const { ObjectId } = require('mongoose');


// create query
router.post("/", async (req, res) => {
    try {
        const newQuery = await Query.create(req.body);
        res.status(200).send(newQuery);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// get all queries
router.get("/", async (req, res) => {
    try {
        const getAllQuery = await Query.find({}).populate("assignedTo");
        res.status(200).send(getAllQuery);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// get query by user._id
router.get("/student/:userId", async (req, res) => {
    try {
        const queries = await Query.find({ createdBy: req.params.userId }).populate("assignedTo");
        res.status(200).send(queries);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// get single query
router.get("/single/:id", async (req, res) => {
    try {
        const findQuery = await Query.findOne({ _id: req.params.id }).populate("assignedTo", { password: 0 });
        res.status(200).send(findQuery);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// pick query
router.put("/pick", async (req, res) => {
    try {
        const findMentor = await User.findOne({ _id: req.body.mentorId });
        const findQuery = await Query.findOneAndUpdate({ _id: req.body.queryId }, { $set: { assignedTo: findMentor._id, status: "assigned" } });
        res.send(findQuery)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// update query detail
router.put("/update/:queryId", async (req, res) => {
    try {
        const update = await Query.findOneAndUpdate({ _id: req.params.queryId }, { $set: req.body });
        res.send("update done and query closed")
    } catch (error) {
        res.status(500).send(error.message);
    }
})

// get queries of mentor 
router.get("/mentor/:mentorId", async (req, res) => {
    try {
        const queries = await Query.find({ assignedTo: req.params.mentorId });
        res.status(200).send(queries);
    } catch (error) {
        res.status(500).send(error.message);
    }
})



module.exports = router;