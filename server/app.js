require('dotenv').config();
const express = require('express');
const session = require('express-session');
const dbconnect = require('./config/db');

const app = express();

const userRouter = require('./routes/user.router');
const gameRouter = require('./routes/game.router');
const quizRouter = require('./routes/quiz.router');


app.use(express.static('public'));
app.use(express.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

app.use('/user', userRouter);
// app.use('/', gameRouter);
app.use('/quiz', quizRouter);


dbconnect();

app.listen(process.env.PORT ?? 3001);
