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

module.exports.verify = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: "Access  denied" });
    }

    try {
      token = token.split(" ")[1];

      jwt.verify(token, secret, (error, decodedToken) => {
        if (error) {
          return res
            .status(400)
            .json({ auth: "Failed", message: error.message });
        } else {
          req.user = decodedToken;
          next();
        }
      });
    } catch (error) {
      return res.status(400).json({ message: "Invalid token" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
