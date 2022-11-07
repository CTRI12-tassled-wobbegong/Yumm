const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const postController = require('../controllers/postController.js');
const commentController = require('../controllers/commentController.js');
const makeController = require('../controllers/makeController.js');
const friendController = require('../controllers/friendController.js');

//get request for userController.getAllUsers
router.get('/user', userController.getAllUsers, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//post request for userController.createUser
router.post('/user', userController.createUser, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//get request for postController.getAllPosts
router.get('/post', postController.getAllPosts, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//post request for postController.createPost
router.post('/post', postController.createPost, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//delete request for postController.deletePost
router.delete('/post', postController.deletePost, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//post request for commentController.createComment
router.post('/comment', commentController.createComment, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//comment request for commentController.getAllComments
router.get('/comment', commentController.getAllComments, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//comment request for commentController.deleteComment
router.delete('/comment', commentController.deleteComment, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//post request for makeController.createMake
router.post('/make', makeController.createMake, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//delete request for makeController.deleteMake
router.delete('/make', makeController.deleteMake, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

//post request for friendController.createFriend
router.post('/friend', friendController.createFriend, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

// delete request for friendController.deleteFriend
router.delete('/friend', friendController.deleteFriend, (req, res) => {
  console.log(res.locals);
  res.status(200).json(res.locals);
});

module.exports = router;
