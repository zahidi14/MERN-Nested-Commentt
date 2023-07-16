const express = require("express");
const routes = express.Router();
const authController = require("../conroller/authController");

routes.post("/auth", authController.register);

module.exports = routes;
