const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const MenuRouter = require("./routes/menu");
const AuthRouter = require("./routes/auth");

const app = express();
const cors = require("cors");

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/menu", MenuRouter);
app.use("/auth", AuthRouter);

module.exports = app;
