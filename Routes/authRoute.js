const express = require('express');
const User = require('../Models/userModel');
const router = express.Router();


// login
router.post("/login", async (req, res) => {
    const findEmail = await User.findOne({ email: req.body.email });

    if (findEmail) {
        if (findEmail.password === req.body.password) {
            const { password, ...others } = findEmail._doc;
            res.send({ msg: "success", user: others })
        } else {
            res.send({ msg: "Invalid credentials" });
        }
    } else {
        res.status(404).send({ msg: "Invalid credentials" });
    }
})

// verify email



module.exports = router;