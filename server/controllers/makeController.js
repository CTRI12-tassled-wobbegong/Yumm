const db = require('../models/dbModel');

const makeController = {};

//CREATE MAKE

//can't test this
makeController.createMake = (req, res, next) => {
  const values = ['5', '1'];
  const query1 = `
      SELECT * FROM public.make WHERE (post_id) = ($1) AND (maker_id) = ($2);
      `;
  db.query(query1, values)
    .then((data) => {
      if (data.rows.length === 0) {
        const query2 = `
        INSERT INTO public.make (post_id, maker_id)
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
              log: 'makeController.createMake: ERROR: ' + e,
              message: 'makeController.createMake: ERROR: Database query issue',
            })
          );
      } else {
        res.locals = [];
        return next();
      }
    })
    .catch((e) =>
      next({
        log: 'makeController.createMake: ERROR: ' + e,
        message: 'makeController.createMake: ERROR: Database query issue',
      })
    );
};

//DELETE MAKE
makeController.deleteMake = (req, res, next) => {
  const query = `
    DELETE FROM public.make WHERE (make_id) = ($1);
  `;
  const values = [1];
  db.query(query, values)
    .then((data) => {
      res.locals = data.rowCount;
      return next();
    })
    .catch((e) => {
      next({
        log: 'makeController.deleteMake: ERROR: ' + e,
        message: 'makeController.deleteMake: ERROR: Database query issue',
      });
    });
};

module.exports = makeController;
