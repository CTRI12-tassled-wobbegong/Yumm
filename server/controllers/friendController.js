const db = require('../models/dbModel');

const friendController = {};

//CREATE - ADD FRIEND
friendController.createFriend = (req, res, next) => {
  const values = [1, 4];
  const query1 = `
    SELECT * FROM public.friend WHERE (user1_id) = ($1) AND (user2_id) = ($2);
    `;
  db.query(query1, values)
    .then((data) => {
      if (data.rows.length === 0) {
        const query2 = `
        INSERT INTO public.friend (user1_id, user2_id)
        VALUES ($1, $2)
        RETURNING *;
        `;
        db.query(query2, values)
          .then((data) => {
            res.locals = data.rows;
            return next();
          })
          .catch((e) =>
            next({
              log: 'friendController.createFriend: ERROR: ' + e,
              message: 'friendController.createFriend: ERROR: Database query issue',
            })
          );
      } else {
        res.locals = [];
        return next();
      }
    })
    .catch((e) =>
      next({
        log: 'friendController.createFriend: ERROR: ' + e,
        message: 'friendController.createFriend: ERROR: Database query issue',
      })
    );
};

//DELETE - REMOVE FRIEND

friendController.deleteFriend = (req, res, next) => {
  const query = `
  DELETE FROM public.friend WHERE (friend_id) = ($1);
`;
  const values = [12];
  db.query(query, values)
    .then((data) => {
      res.locals = data.rowCount;
      return next();
    })
    .catch((e) => {
      next({
        log: 'friendController.deleteFriend: ERROR: ' + e,
        message: 'friendController.deleteFriend: ERROR: Database query issue',
      });
    });
};

module.exports = friendController;
