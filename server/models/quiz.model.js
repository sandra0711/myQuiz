const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  gameId: { type: mongoose.Schema.ObjectId, ref: 'Game' },
  correctAnwerId: Number,
  text: String,
  answers: [String],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = { Quiz };
