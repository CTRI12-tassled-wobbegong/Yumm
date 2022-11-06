const db = require('../models/dbModel');

const postController = {};

//GET POST FOR FEED
postController.getAllPosts = (req, res, next) => {
  const query = `SELECT * FROM public.post`;

  db.query(query)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((e) => {
      next({
        log: 'postController.getAllPosts: ERROR: ' + e,
        message: 'postController.getAllPosts: ERROR: Database query issue',
      });
    });
};

//CREATE POST
postController.createPost = (req, res, next) => {
  const query = `
    INSERT INTO public.post (poster_id, date, description, category, cook_time, image)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  const today = new Date();
  const date = today.toString();
  const values = [1, date, 'food2', 'veggie2', '4 mins', 'fff4'];

  db.query(query, values)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((e) => {
      next({
        log: 'postController.createPost: ERROR: ' + e,
        message: 'postController.createPost: ERROR: Database query issue',
      });
    });
};

//DELETE POST
postController.deletePost = (req, res, next) => {
  const query = `
    DELETE FROM public.post WHERE (post_id) = ($1);
  `;
  const values = [4];
  db.query(query, values)
    .then((data) => {
      res.locals = data.rowCount;
      return next();
    })
    .catch((e) => {
      next({
        log: 'postController.deletePost: ERROR: ' + e,
        message: 'postController.deletePost: ERROR: Database query issue',
      });
    });
};

module.exports = postController;
