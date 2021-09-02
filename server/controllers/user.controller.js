require('dotenv').config();
const bcrypt = require('bcrypt');
const session = require('express-session');
const { User } = require('../models/user.model');

const userSignup = async (req, res) => {
  const name = req.body.inputsValue.name.inputValue;
  const age = req.body.inputsValue.age.inputValue;
  const img = req.body.inputsValue.img.inputValue;
  const pass = req.body.inputsValue.pass.inputValue;
  try {
    if (name && age && pass && img) {
      await User.create({
        name: name,
        age: age,
        password: pass,
        pic: img,
      });
      return res.json({ name, age, pass, img });
    };
  } catch {
    return res.status(500).json({ err: 'error' });
  }
};

//  router.post('/login', async (req, res) => {
//     const { name, pass } = req.body;
//     const user = await User.findOne({ name: name });
//     if (user) {
//       delete user.password;
//       req.session.user = user;
//       return res.end();
//     } else {
//       console.log('Пользователь не найден');
//       res.status(401).end();
//     }

//   })

module.exports = { userSignup }
