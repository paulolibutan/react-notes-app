const express = require("express");
const router = express.Router();

const noteController = require("../controllers/note");
const { verify } = require("../middlewares/auth.js");

router.get("/", verify, noteController.getUserNotes);
router.post("/add", verify, noteController.createNote);
router.put("/update/:noteId", verify, noteController.updateNote);
router.delete("/delete/:noteId", verify, noteController.deleteNote);

module.exports = router;
