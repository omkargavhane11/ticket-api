const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    contactNo: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "student"
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema)

