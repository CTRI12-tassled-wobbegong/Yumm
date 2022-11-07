const db = require('../models/dbModel');

const postController = {};

//GET POST FOR FEED
postController.getAllPosts = (req, res, next) => {
  const query = `
  SELECT public.post.*, public.user.name AS poster_name, m.*, c.*
  FROM public.post
  INNER JOIN public.user ON public.user.user_id = public.post.poster_id
  LEFT OUTER JOIN
    (SELECT public.comment.comment_id, public.comment.commenter_id, public.comment.post_id, public.comment.comment, public.user.name AS commenter_name
    FROM public.comment
    INNER JOIN public.user ON public.comment.commenter_id = public.user.user_id)
    c ON c.post_id = public.post.post_id
  LEFT OUTER JOIN
    (SELECT public.make.make_id, public.make.maker_id, public.make.post_id, public.user.name AS maker_name
    FROM public.make
    INNER JOIN public.user ON public.make.maker_id = public.user.user_id)
    m ON m.post_id = public.post.post_id;
  `;

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
