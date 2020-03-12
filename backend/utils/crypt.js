const crypto = require("crypto");
const Enum = require("../constants/enum");

function genPwd(pwd) {
  return crypto
    .createHmac("sha256", Enum.pwdSecret)
    .update(pwd)
    .digest("hex");
}

module.exports = {
  genPwd
};
