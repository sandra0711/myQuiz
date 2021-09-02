const express = require('express');
const router = express.Router();
const { quizCreate, gameCreate } = require('../controllers/quiz.controller');
const { Quiz } = require('../models/quiz.model');

// const saltRounds = process.env.SALT;

router
  .route('/create')
  .post(quizCreate);

router
  .route('/choose-game')
  .get(gameCreate);

module.exports = router;
