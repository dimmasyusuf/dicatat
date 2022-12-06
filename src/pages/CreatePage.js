import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/api";

function CreatePage() {
  const navigate = useNavigate();

  function onCreateNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section className="create-page">
      <NoteInput addNote={onCreateNoteHandler} />
    </section>
  );
}

export default CreatePage;
