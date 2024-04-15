// SET CONTROLLER METHODS INVOKED BY ROUTE USED 
// TAKES IN A REQUEST FROM A CLIENT THEN DELEGATES AND TALKS TO THE DATABASE
const Ticket = require('../models/Ticket');

const getTickets = async (req, res, next) => {
    try {
        const tickets = await Ticket.find();
        
        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(tickets) 
    } catch (err) {
        next(err);
    }
}

const postTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.create(req.body)

        res
        .status(201)
        .setHeader('content-type', 'application/json')
        .json(ticket)
    } catch (err) {
        next(err);
    } 
}

const getTicket = async (req, res, next) => {
    try {
        const ticket = await Ticket.findById(req.params.ticketId);

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(ticket)
    } catch (err) {
        next(err);
    }
}

const updateTicketStatus = async (req, res, next) => {
    console.dir('CONTROLLER REQ', req)
    console.dir(`CONTROLLER PARAMS: REQ.BODY: ${req.body} | RES: ${res} | ID: ${req.params.ticketId}`)
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.ticketId, req.body, { new: true })

        res
        .status(200)
        .setHeader('content-type', 'application/json')
        .json(ticket)
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getTickets, 
    postTicket, 
    getTicket,
    updateTicketStatus
}