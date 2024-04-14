import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
