const jwt = require("jsonwebtoken");

const secret =
  "HDh*kfn3V4TFbQDKmZSx@E5uVHkt+!!!IPJxYPE&r9b#tKx)eAgt*(Bb$ICGdUVP";

module.exports.createAccessToken = (user) => {
  let data = {
    id: user._id,
    email: user.email,
  };

  return jwt.sign(data, secret, {});
};

module.exports.verfiy = (req, res, next) => {
    
};
