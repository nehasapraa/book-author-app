import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import logger from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

import indexRouter from './routes/api/index';

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);

export default app;