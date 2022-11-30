import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { createNote } from "../utils/data";

function CreatePage() {
  const navigate = useNavigate();

  function onCreateNoteHandler(note) {
    createNote(note);
    navigate("/");
  }

  return (
    <section className="create-page">
      <NoteInput createNote={onCreateNoteHandler} />
    </section>
  );
}

export default CreatePage;
