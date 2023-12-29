const express = require("express");
const cabinRouter = express.Router();

cabinRouter
    .route("/")
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        next();
    })
    .get((req, res) => {
        res.end("Will send all the cabins available to you");
    })
    .post((req, res) => {
        res.end(
            `Will add the cabins reservation information: ${req.body.name} with price: ${req.body.price} and requested dates:${req.body.date}`
        );
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /cabins");
    })
    .delete((req, res) => {
        res.end(
            `Will delete the cabins reservation information: ${req.body.name} with price: ${req.body.price} and requested dates:${req.body.date}`
        );
    });

module.exports = cabinRouter;
