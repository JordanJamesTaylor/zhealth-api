const express = require('express');

const router = express.Router();

const {
    getTickets,
    getTicket,
    postTicket,
    updateTicketStatus
} = require('../controllers/ticketController.js');

router.route('/')
    .get(getTickets)
    .post(postTicket)

router.route(`/:ticketId`).get(getTicket).put(updateTicketStatus)

module.exports = router;