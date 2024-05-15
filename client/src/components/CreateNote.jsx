import NoteForm from "./NoteForm";

const CreateNote = ({ isOpen }) => {
  const headerText = "Create new note";

  return <div>{isOpen && <NoteForm headerText={headerText} />}</div>;
};

export default CreateNote;
