const { validationResult } = require("express-validator");
const blogScheme = require("../model/blogScheme");
const path = require("path");
const fs = require("fs");

exports.getAllBlog = (req, res, next) => {
  blogScheme
    .find()
    .then((result) => {
      res.status(200).json({
        message: "data fetched",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getBlog = (req, res, next) => {
  const blogId = req.params.blogId;
  blogScheme
    .findById(blogId)
    .then((result) => {
      if (!result) {
        const err = new Error("blog Not Found");
        err.stat = 404;
        throw err;
      }
      {
        res.status(200).json({
          message: "fetched",
          data: result,
        });
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.blogPost = (req, res, next) => {
  console.log("req", req.body);
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("invlar");
    err.errorStat = 400;
    err.data = errors.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error("upload image");
    err.errorStat = 422;
    throw err;
  }

  const title = req.body.title;
  const content = req.body.content;
  const image = req.file.path;

  const Post = new blogScheme({
    title: title,
    content: content,
    image: image,
    author: { uid: 1, name: "cokcokcuy" },
  });

  Post.save()
    .then((result) => {
      res.status(201).json({
        message: "Posted Successfully",
        data: result,
      });
    })
    .catch((err) => {
      console.log("error", err);
      next(err);
    });
};

exports.blogUpdate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("invlar");
    err.errorStat = 400;
    err.data = errors.array();
    throw err;
  }
  if (!req.file) {
    const err = new Error("upload image");
    err.errorStat = 422;
    throw err;
  }
  const title = req.body.title;
  const content = req.body.content;
  const image = req.file.path;
  const blogId = req.params.blogId;
  blogScheme
    .findById(blogId)
    .then((post) => {
      if (!post) {
        const error = new Error("blog not found");
        error.stat = 404;
        throw error;
      }
      post.title = title;
      post.content = content;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "updated successfully",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.blogDel = (req, res, next) => {
  const blogId = req.params.blogId;

  blogScheme
    .findById(blogId)
    .then((post) => {
      if (!post) {
        const err = new Error("datat not found");
        err.stat = 404;
        throw err;
      }

      removeimage(post.image);
      return blogScheme.findByIdAndRemove(blogId);
    })
    .then((result) => {
      res.status(200).json({
        message: "deletted successfully",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeimage = (filepath) => {
  filepath = path.join(__dirname, "../..", filepath);
  fs.unlink(filepath, (err) => {
    console.log(err);
  });
};
