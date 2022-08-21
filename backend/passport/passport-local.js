const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User } = require("../models");

passport.use(
  new LocalStrategy(async function (username, password, done) {
    let user, error;
    try {
      user = await User.findOne({ where: { username: username } });
    } catch (err) {
      console.error(error);
      error = err;
    }
    if (error) {
      console.error(error);
      return done(error);
    }
    if (!user) {
      console.log("111");
      return done(null, false);
    }
    if (user.password !== password) {
      console.log("222");
      return done(null, false);
    }
    console.log("333");
    return done(null, user);
  })
);
