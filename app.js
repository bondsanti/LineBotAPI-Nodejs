const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//env config
const dotenv = require('dotenv');
dotenv.config();

const indexRouter = require('./routes/index');
const lineRouter =  require('./routes/line');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //  http://localhost:4000
app.use('/line',lineRouter); // http://localhost:4000/line/callback

module.exports = app;
