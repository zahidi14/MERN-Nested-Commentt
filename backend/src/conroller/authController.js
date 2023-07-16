exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.password;
  res.status(201).json({
    message: "register successfull",
    data: {
      udi: "1",
      name: name,
      email: email,
    },
  });
};
