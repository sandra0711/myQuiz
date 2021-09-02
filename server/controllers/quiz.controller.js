require('dotenv').config();
const { Quiz } = require('../models/quiz.model');
const { Game } = require('../models/game.model');

const quizCreate = async (req, res) => {
  console.log(req.body.game, req.body.quiz[0].answers);
  try {
    // if (name && age && pass && img) {
    //   await User.create({
    //     name: name,
    //     age: age,
    //     password: pass,
    //     pic: img,
    //   });
    //   return res.json({ name, age, pass, img });
    // };
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

const gameCreate = async (req, res) => {
  try {
    const games = await Game.find();
    console.log(games);
    return res.json({ games });
  } catch {
    return res.status(500).json({ err: 'error' });
  }
};

module.exports = { quizCreate, gameCreate }
