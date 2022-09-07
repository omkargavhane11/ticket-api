const express = require('express');
const router = express.Router();
const User = require("../Models/userModel");


// add new user
router.post("/register", async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.send({ msg: "User created successfully" })
        // console.log(req.body)
    } catch (error) {
        res.send({ msg: "Error creating user" });
    }
})

// get all users
router.get("/", async (req, res) => {
    try {
        const getAll = await User.find({}, { password: 0 });
        res.send(getAll)
    } catch (error) {
        res.send({ msg: error });
    }
})

// get user by ID
router.get("/:id", async (req, res) => {
    try {
        const getUser = await User.find({ _id: req.params.id }, { password: 0 });
        res.send(getUser)
    } catch (error) {
        res.send({ msg: error });
    }
})


module.exports = router;