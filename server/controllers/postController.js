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
  const properties = ["date", "description", "category", "cook_time", "image"];
  //const values = [];
  //   for (const property of properties) {
  //     values.push(req.body[property]);
  //   }
  const values = ["1-1", "food", "veggie", "2mins", "fff"];
  console.log(values);
  const query = `
    INSERT INTO public.post (date, description, category, cook_time, image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `;
  db.query(query, values)
    .then((data) => {
      console.log(data);
      return next();
    })
    .catch((err) => {
      console.log("Error caught");
      return next(err);
    });
};

//DELETE POST

module.exports = postController;
