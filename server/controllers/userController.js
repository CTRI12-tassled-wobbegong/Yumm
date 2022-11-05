const User = require("../models/userModel");

const userController = {};

const createErr = (errInfo) => {
  const { method, type, err } = errInfo;
  return {
    log: `controller.${method} ${type}: ERROR : 
        ${typeof err === "object" ? JSON.stringify(err) : err}`,
    message: {
      err: `Error occured in userController.${method}`,
    },
    status: type,
  };
};

/**
 * getAllUsers - retrieve all users from the database and stores it into res.locals
 * before moving on to next middleware.
 */

/**
 * createUser - create and save a new User into the database.
 */

/**
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */

module.exports = userController;
