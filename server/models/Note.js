const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: [true, "Note title is required"] },
    content: { type: String, required: [true, "Note content is required"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", noteSchema);
