const express = require("express");
const logger = require("morgan");
const path = require("path");

const toDoRouter = require("./routes/toDoRouter");
const indexRouter = require("./routes/indexRouter");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(logger("dev"));
app.use(express.json());


// if anyone goes here, take them to indexRouter
app.use("/", indexRouter);
// if anyone goes here, take them to teamRouter
app.use("/api/todo", toDoRouter);

// app.listen(3000, function () {
//   console.log(`Server is running on PORT: ${3000}`);
// });


module.exports = router;