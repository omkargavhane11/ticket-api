const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const Query = require("./queryModel");

const querySchema = new mongoose.Schema({
    queryNo: {
        type: String,
        required: true,
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: 0
    },
    status: {
        type: String,
        default: "unassigned"
    },
    category: {
        type: String,
        required: true
    },
    preferredLanguage: {
        type: String,
        required: true
    },
    queryTitle: {
        type: String,
        required: true
    },
    queryDescription: {
        type: String,
        // required: true
    },
    preferredTimeFrom: {
        type: String,
        required: true
    },
    preferredTimeTo: {
        type: String,
        required: true
    },
    solution: {
        type: String,
        default: ""
    },
    feedback: {
        type: String,
        default: ""
    },
    closedByMentor: {
        type: Boolean,
        default: false
    }

},
    { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema)

