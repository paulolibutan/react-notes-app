import NoteForm from "./NoteForm";

const CreateNote = () => {
  const headerText = "Create new note";

  return (
    <div>
      <NoteForm headerText={headerText} />
    </div>
  );
};

export default CreateNote;
