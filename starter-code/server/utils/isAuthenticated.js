isAuthenticated = (req, res, next) => {
  return (!req.isAuthenticated())? res.status(403).json(new Error("Not Authorized")) : next();
}

module.exports = isAuthenticated;
