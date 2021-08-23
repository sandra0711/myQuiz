const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.length(process.env.PORT ?? 3001);
