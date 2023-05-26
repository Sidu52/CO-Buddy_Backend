const mongoose = require('mongoose');

const coBuddy = new mongoose.Schema({
    "name": {
        "type": String,
        "required": true,
        "trim": true,
        "unique": true
    },
    "destination": {
        "type": String,
        "required": true,
        "trim": true
    },
    "date": {
        "type": Date,
        "required": true,
        "trim": true
    },
    "number": {
        "type": Number,
        "required": true,
        "trim": true
    },
    "createdAt": {
        "type": Date,
        "default": Date.now
    },
    "updatedAt": {
        "type": Date,
        "default": Date.now
    }
}, {
    timestamps: true
})

const User = mongoose.model('coTraveller', coBuddy);
module.exports = User;