require('dotenv').config();
const express = require('express');
const session = require('express-session');
const dbconnect = require('./config/db');
const bcrypt = require('bcrypt');

const { User } = require('./models/user.model');


const saltRounds = process.env.SALT;

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

dbconnect();

app.post('/auth', async (req, res) => {
  const { name, age, pass, img } = req.body.user;
  if (name && age && pass && img) {
    const newUser = new User({
      name: name,
      age: age,
      password: pass,
      pic: img,
    });
    newUser.save(err => {
      if (err) {
        throw err;
        console.log('пользователь добавлен');
      };
    });
  };
});

app.post('/login', async (req, res) => {
  const { name, pass } = req.body;
  const user = await User.findOne({ name: name });
  if (user) {
    delete user.password;
    req.session.user = user;
    return res.end();
  } else {
    console.log('Пользователь не найден');
    res.status(401).end();
  }

})



app.listen(process.env.PORT ?? 3001);
