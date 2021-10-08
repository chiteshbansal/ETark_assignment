const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  let authHeader = req.get("Authorization");
  if (!authHeader) {
    let error = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "somesupersecretsecretkey");
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }

  if (!decodedToken) {
    let error = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
