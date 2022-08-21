const express = require("express");
const app = express();
const session = require("express-session");
const passportMiddleware = require("./passport");
// 讀body資料
app.use(express.urlencoded({ extended: true }));
// 解析json資料
app.use(express.json());

app.use(
  session({
    secret: "nksnfoiehhrekwqnrlkje",
    resave: "false",
    saveUninitialized: "false",
  })
);
app.use(passportMiddleware);
const db = require("./models/index");

let activityRouter = require("./routers/activity");
let managerRouter = require("./routers/manager");
app.use("/", (req, res, next) => {
  console.log(req.path);
  console.log(req.body);
  next();
});
app.use("/activity", activityRouter);
app.use("/manager", managerRouter);

db.sequelize.sync().then((req) => {
  app.listen(3001, (req, res) => {
    console.log("express啟動");
  });
});
