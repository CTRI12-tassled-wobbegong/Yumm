const db = require("../models/dbModel");

const commentController = {};

//CREATE COMMENT

commentController.createComment = (req, res, next) => {
  const values = ["4", "1", "looks so good"];
  const query = `
        INSERT INTO public.comment (post_id, user_id, comment)
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

  db.query(query, values)
    .then((data) => {
      console.log(data);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      console.log("Error caught in commentController");
      return next(err);
    });
};

//DELETE COMMENT

module.exports = commentController;
