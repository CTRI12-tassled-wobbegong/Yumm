const db = require('../models/dbModel');

const commentController = {};

//CREATE COMMENT
commentController.getAllComments = (req, res, next) => {
  const query = `
        SELECT * FROM public.comment;
    `;
  db.query(query)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((e) =>
      next({
        log: 'commentController.getAllComments: ERROR: ' + e,
        message: 'commentController.getAllComments: ERROR: Database query issue',
      })
    );
};

commentController.createComment = (req, res, next) => {
  const values = [5, 1, 'ok'];
  const query = `
        INSERT INTO public.comment (post_id, commenter_id, comment)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

  db.query(query, values)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((e) =>
      next({
        log: 'commentController.createComment: ERROR: ' + e,
        message: 'commentController.createComment: ERROR: Database query issue',
      })
    );
};

//DELETE COMMENT
commentController.deleteComment = (req, res, next) => {
  const query = `
    DELETE FROM public.comment WHERE (comment_id) = ($1);
  `;
  const values = [4];
  db.query(query, values)
    .then((data) => {
      res.locals = data.rowCount;
      return next();
    })
    .catch((e) => {
      next({
        log: 'commentController.deleteComment: ERROR: ' + e,
        message: 'commentController.deleteComment: ERROR: Database query issue',
      });
    });
};

module.exports = commentController;
