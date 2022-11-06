const db = require("../models/dbModel");

const postController = {};

//GET POST FOR FEED
postController.getAllPosts = (req, res, next) => {
  const query = `SELECT * FROM public.post`;

  db.query(query)
    .then((data) => {
      res.locals = data.rows;
      return next();
    })
    .catch((e) =>
      next({
        log: "postController.getAllPosts: ERROR: " + e,
        message: "postController.getAllPosts: ERROR: Database query issue",
      })
    );
};

//CREATE POST
postController.createPost = (req, res, next) => {
  const values = ["1", "1999-01-08", "food", "veggie", "2 mins", "fff"];
  // console.log(values);
  const query = `
    INSERT INTO public.post (user_id, date, description, category, cook_time, image)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `;
  db.query(query, values)
    .then((data) => {
      console.log(data);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      console.log("Error caught in postController");
      return next(err);
    });
};

//DELETE POST
postController.deletePost = (req, res, next) => {
  const query = `
    DELETE FROM post WHERE post_id = 3 AND user_id = 1
  `;

  db.query(query, function (err, result) {
    if (err) throw err;
    console.log("Deleted rows:", result.affectedRows);
  });
};

module.exports = postController;
