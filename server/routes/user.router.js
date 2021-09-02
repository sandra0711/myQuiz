const express = require('express');
const router = express.Router();
const { userSignup } = require('../controllers/user.controller');

// const saltRounds = process.env.SALT;

router
  .route('/signup')
  .post(userSignup);

module.exports = router;
