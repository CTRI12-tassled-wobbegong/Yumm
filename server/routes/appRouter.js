const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController.js');
const userController = require('../controllers/userController.js');

router.get('/', userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post('/', userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

module.exports = router;
