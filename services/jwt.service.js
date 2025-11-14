const jwt = require("jsonwebtoken");
const dbConfig = require("../config/app.config.json");

class JwtService {
  generate(payload) {
    return jwt.sign(payload, dbConfig.jwt_secret, { expiresIn: "7d" });
  }

  verify(token) {
    return jwt.verify(token, dbConfig.jwt_secret);
  }
}

module.exports = new JwtService();
