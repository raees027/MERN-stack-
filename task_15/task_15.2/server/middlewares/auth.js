const checkAuth = (req, res, next) => {
  const { auth } = req.body;

  if (!auth) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  console.log("inside specific middleware");
};
next();

module.exports = { checkAuth };
