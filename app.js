const express = require('express');
const app = express();
const cors = require('cors');
const OpenApiValidator = require('express-openapi-validator');

app.use(cors());
app.use(express.json());

//const carsRouter = require('./routers/carsRouter');
//app.use('/cars', carsRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});

module.exports = app;