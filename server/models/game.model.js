const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  about: String,
});

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };
