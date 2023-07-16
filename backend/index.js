const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const app = express();
const authRoute = require("./src/routes/authRoutes");
const router = require("./src/routes/blogRoutes");

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(bodyParser.json());
app.use(multer({ storage: fileStorage, fileFilter: filter }).single("image"));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1", authRoute);
app.use("/v1", router);
app.use((error, req, res, next) => {
  const status = error.errorStat || 500;
  const message = error.message;
  const data = error.data;

  res.status(status).json({ message: message, data: data });
  next();
});

mongoose
  .connect(
    "mongodb+srv://zero:12qwerty@test.cttxssn.mongodb.net/mernBlog?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("listening on port");
    });
  })
  .catch((err) => {
    console.log("error connecting databas", err);
  });
