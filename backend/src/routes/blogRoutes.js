const blogcontroller = require("../conroller/blogcontroller");
const express = require("express");
const router = express.Router();

router.get("/blog", blogcontroller.getBlog);
router.post("/blog", blogcontroller.blogPost);

module.exports = router;
