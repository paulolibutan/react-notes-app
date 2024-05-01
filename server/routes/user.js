const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { verify } = require("../middlewares/auth.js");

router.get("/details", verify, userController.getUserById);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

module.exports = router;
