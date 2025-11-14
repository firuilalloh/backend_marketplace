const bcrypt = require("bcrypt");

class BcryptService {
  constructor() {
    this.saltRounds = 10;
  }

  async encrypt(password) {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }

  async decrypt(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }
}

module.exports = new BcryptService();
