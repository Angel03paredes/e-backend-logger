const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const {applicationsRoutes,logsRoutes} = require("./routes")

const app = express();

// DB Connect
require("./db").Connection();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoints
app.use('/api',[
    applicationsRoutes,
    logsRoutes,
]);

module.exports = app;
