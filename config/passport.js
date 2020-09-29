const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models/");

passport.use(
  new LocalStrategy(
    {
      usernameField: "userName",
    },
    (userName, password, done) => {
      db.User.findOne({
        where: {
          userName: userName,
        },
      }).then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect User Name",
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Incorrect Password",
          });
        }

        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;