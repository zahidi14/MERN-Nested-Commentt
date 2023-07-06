const express = require("express");
const router = require("./src/routes/blogRoutes");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/", router);

app.listen(5000, () => {
  console.log("listening on port");
});
