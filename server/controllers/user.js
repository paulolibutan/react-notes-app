const bcrypt = require("bcrypt");

const User = require("../models/User");
const auth = require("../middlewares/auth");

module.exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const emailExists = await User.findOne({ email });

    if (emailExists) {
      return res.status(409).json({ message: "Emails is already in use" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ message: "Password must be at least 8 characters" });
    }

    const saltRounds = 10;
    const hashPassword = bcrypt.hashSync(password, saltRounds);

    let user = new User({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    await user.save();

    return res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Email or password is invalid" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Email or password is invalid" });
    }

    const token = auth.createAccessToken(user);

    return res.status(200).json({ accessToken: token });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
