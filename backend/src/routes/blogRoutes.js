const blogcontroller = require("../conroller/blogcontroller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.get("/blog", blogcontroller.getAllBlog);
router.get("/blog/:blogId", blogcontroller.getBlog);
router.delete("/blog/:blogId", blogcontroller.blogDel);
router.post(
  "/blog/post",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("not meet minimum ccharacter"),
    body("content")
      .isLength({ min: 5 })
      .withMessage("not meet minimum ccharacter"),
  ],
  blogcontroller.blogPost
);
router.put(
  "/blog/:blogId",
  [
    body("title")
      .isLength({ min: 5 })
      .withMessage("not meet minimum ccharacter"),
    body("content")
      .isLength({ min: 5 })
      .withMessage("not meet minimum ccharacter"),
  ],
  blogcontroller.blogUpdate
);

module.exports = router;
