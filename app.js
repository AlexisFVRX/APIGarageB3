const express = require('express');
const app = express();
const cors = require('cors');
const OpenApiValidator = require('express-openapi-validator');

app.use(cors());
app.use(express.json());

const carsRouter = require('./routers/carsRouter');
app.use('/cars', carsRouter);
const customersRouter = require('./routers/customersRouter');
app.use('/customers', carsRouter);
const employeesRouter = require('./routers/employeesRouter');
app.use('/employees', carsRouter);

app.use((error, req, res, next) => {
    res.status(error.status || 500)
        .json({success: false, message: error.message, status: error.status});
});

module.exports = app;