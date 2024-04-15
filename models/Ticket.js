const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');

const ticketSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: (email) => validator.isEmail(email)
    },
    description: {
        type: String,
        required: true
    },
    ticketStatus: {
        type: String,
        required: true,
    },
    adminResponse: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Ticket', ticketSchema);