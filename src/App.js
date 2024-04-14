import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "14/04/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "13/04/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "10/04/2024",
    },
  ]);

  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
