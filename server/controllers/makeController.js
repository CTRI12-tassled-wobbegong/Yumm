const db = require("../models/dbModel");

const makeController = {};

//CREATE MAKE

//can't test this
makeController.createMake = (req, res, next) => {
  const value = ["3", "1"];
  const query = `
        INSERT INTO public.make (post_id, user_id)
        VALUES ($1, $2)
        RETURNING *
    `;
  db.query(query, values)
    .then((data) => {
      console.log(data);
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      console.log("Error caught in makeController.createMake");
      return next(err);
    });
};

//DELETE MAKE

module.exports = makeController;
