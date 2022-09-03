const mongoose = require('mongoose');
const { Schema } = require("mongoose");
const User = require("./userModel");

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String,
        ref: "User",
        required: true
    },
    queryId: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }

},
    { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema)

