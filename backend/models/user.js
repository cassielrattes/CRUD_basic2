const { genPwd } = require("../utils/crypt");

class User {
  constructor({ name, email, info }) {
    this.name = name;
    this.email = email;
    this.info = info || {};
  }
  static setPassword(pwd) {
    this.pwd = genPwd(pwd);
  }
}

module.exports = User;
