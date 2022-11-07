const express = require("express");
const router = express.Router();
const passport = require("passport");
const db = require("../models/dbModel");

//Google Authentication

var GoogleStrategy = require("passport-google-oauth20");
console.log(process.env.GOOGLE_CLIENT_ID);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://localhost:8080/google-oauth2-callback",
      scope: ["profile"],
      state: true,
    },
    function verify(accessToken, refreshToken, profile, cb) {
      db.query(
        "SELECT * FROM public.federated_credentials WHERE provider = ($1)  AND subject = ($2)",
        ["https://accounts.google.com", profile.id],
        function (err, data) {
          if (err) {
            return cb(err);
          }
          if (!data) {
            // The account at Google has not logged in to this app before.  Create a
            // new user record and associate it with the Google account.
            db.query(
              `INSERT INTO public.user (username, password, name, email) VALUES ($1, $2, $3, $4)
              RETURNING *;`,
              [
                profile.displayName,
                profile.displayName,
                profile.displayName,
                profile.displayName,
              ],
              function (err, data) {
                if (err) {
                  return cb(err);
                }
                const id = data.rows.user_id;
                db.query(
                  `INSERT INTO public.federated_credentials (user_id, provider, subject) VALUES ($1, $2, $3)
                  RETURNING *;`,
                  [id, "https://accounts.google.com", profile.id],
                  function (err, data) {
                    if (err) {
                      return cb(err);
                    }
                    const user = {
                      id: id,
                      name: profile.displayName,
                    };
                    return cb(null, user);
                  }
                );
              }
            );
          } else {
            // The account at Google has previously logged in to the app.  Get the
            // user record associated with the Google account and log the user in.
            db.query(
              "SELECT * FROM users WHERE id = ($1)",
              [data.rows.user_id],
              function (err, data) {
                if (err) {
                  return cb(err);
                }
                if (!data) {
                  return cb(null, false);
                }
                return cb(null, data.rows);
              }
            );
          }
        }
      );
    }
  )
);

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

// router.get("/login", function (req, res, next) {
//   res.render("login");
// });

router.get("/login/federated/google", passport.authenticate("google"));

router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successReturnToOrRedirect: "/",
    failureRedirect: "/login",
  })
);

router.post("/logout", function (req, res, next) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
