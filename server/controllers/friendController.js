const db = require("../models/dbModel");

const friendController = {};

//CREATE - ADD FRIEND
friendController.createFriend = (req, res, next) => {
  //what is other_user_id? a different user_id in database?
  const value = ["1", "3"];
  const query = `
    INSERT INTO public.friend (user_id, other_user_id)
    VALUES ($1, $2)
    RETURNING *
    `;

  db.query(query, values)
    .then((data) => {
      console.log("New friend connected");
      res.locals = data.rows;
      return next();
    })
    .catch((err) => {
      console.log("Error caught in friendController.createFriend");
      return next(err);
    });
};

//DELETE - REMOVE FRIEND

module.exports = friendController;
