const dbConnect = require("./config/db");
const { Game } = require('./models/game.model');
const { Quiz } = require('./models/quiz.model');
const mongoose = require('mongoose');

dbConnect();

// const game = new Game({
//   title: 'Свинка Пепа',
//   about: 'Любимая игра Лары'
// });

// game.save((err) => {
//   if (err) throw err;
//   console.log('Создана новая игра');

// const quizes = [
//   {
//     gameId: '612381753c2a6e31e469f450',
//     correctAnwerNumber: 0,
//     text: 'Лучшая подруга Пеппы это...',
//     answers: ['Кошка Кэнди', 'Кролик Ребекка', 'Зебра Зоя', 'Овечка Сьюзи', 'Кенгуру Кайли'],
//   },
//   {
//     gameId: '612381753c2a6e31e469f450',
//     correctAnwerId: 1,
//     text: 'Как зовут младшего брата Дельфины (подруги Пеппы из Франции)?',
//     answers: ['Дайон', 'Дидье', 'Джерод', 'Джехан', 'Дамиен'],
//   },
// ];
// Quiz.create(quizes, err => {
//   if (err) { throw err };
//   console.log('Создана новая игра');

// })
// });





