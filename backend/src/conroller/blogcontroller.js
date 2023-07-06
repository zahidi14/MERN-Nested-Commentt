exports.getBlog = (req, res, next) => {
  res.json({
    message: "goblokkk yeeeyyy",
  });
  next();
};

exports.blogPost = (req, res, next) => {
  console.log("req", req.body);
  const title = req.body.title;
  const content = req.body.content;

  res.json({
    message: "eh tolol",
    title: title,
    content: content,
  });
  next();
};
