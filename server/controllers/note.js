const Note = require("../models/Note");

module.exports.createNote = async (req, res) => {
  try {
    const userId = req.user.id;
    const { title, content } = req.body;

    const note = new Note({
      userId,
      title,
      content,
    });

    await note.save();

    return res
      .status(200)
      .json({ message: "Note has been added successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.getUserNotes = async (req, res) => {
  try {
    const userId = req.user.id;

    const notes = await Note.find({ userId });

    if (notes.length === 0) {
      return res.status(404).json({ message: "User has no existing notes" });
    }

    return res.status(200).json({ notes });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.updateNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const userId = req.user.id;
    const { title, content } = req.body;

    const data = {
      userId,
      title,
      content,
    };

    const updatedNote = await Note.findByIdAndUpdate(noteId, data, {
      new: true,
    });
    return res
      .status(200)
      .json({ message: "Note updated successfully", updatedNote });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.noteId;
    const deletedNote = await Note.findByIdAndDelete(noteId);

    if (!deletedNote) {
      return res.status(400).json({ message: "Note not found" });
    }

    return res
      .status(200)
      .json({ message: "Note deleted successfully", deletedNote });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
