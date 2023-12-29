const express = require("express");
const ticketRouter = express.Router();

ticketRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the ticket types to you");
    })
    .post((req, res) => {
        res.end(
            `Will add the ticket information: ${req.body.type} with price: ${req.body.price} and requested amenities:${req.body.amenities}`
        );
    })
    .put((req, res) => {
        res.end(
            `Will add the updated ticket information: ${req.body.type} with price: ${req.body.price} and requested amenities:${req.body.amenities}`
        );
    })
    .delete((req, res) => {
        res.statusCode = 403;
        res.end("DELETE operation not supported on /tickets");
    });

module.exports = ticketRouter;
