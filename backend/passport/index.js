const compose = require("compose-middleware").compose;
const passport = require("passport");
const { User } = require("../models");
require("./passport-local");
passport.serializeUser(function (user, done) {
  // 只將用戶 id 序列化存到 session 中
  done(null, user.username);
});
passport.deserializeUser(async function (username, done) {
  // 透過使用者 id 到 MongoDB 資料庫尋找用戶完整資訊
  let userData = await User.findOne({ where: { username: username } });
  done(null, userData);
});

module.exports = compose([passport.initialize(), passport.session()]);
