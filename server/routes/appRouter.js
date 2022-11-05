const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController.js");
const userController = require("../controllers/userController.js");
const postController = require("../controllers/postController.js");

router.get("/user", userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post("/user", userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.get("/post", postController.getAllPosts, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post("/post", postController.createPost, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post("/comment", userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.delete("/comment", userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post("/make", userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.delete("/make", userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.post("/friend", userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

router.delete("/friend", userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

module.exports = router;
