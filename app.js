const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//env config
const dotenv = require('dotenv');
dotenv.config();

//cors
const cors = require('cors');


const indexRouter = require('./routes/index');
const lineRouter =  require('./routes/line');

const app = express();

app.use(cors()); // allow all origin
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/line',lineRouter); // http://localhost:4000/line/callback

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter); //  http://localhost:4000


module.exports = app;
