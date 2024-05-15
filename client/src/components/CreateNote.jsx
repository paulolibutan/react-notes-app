import NoteForm from "./NoteForm";

const CreateNote = ({ isOpen, setIsOpen }) => {
  const headerText = "Create new note";

  return (
    <div>
      {isOpen && <NoteForm headerText={headerText} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default CreateNote;
