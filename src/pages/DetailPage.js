import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteDetail from "../components/NoteDetail";
import { getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/api";

function DetailPage() {
  const { id } = useParams();
  const [notes, setNotes] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getNote(id).then((note) => setNotes(note.data));
  }, [id]);

  if (!notes) {
    return null;
  }

  const archiveHandler = (id) => {
    archiveNote(id).then(() => {
      navigate("/");
    });
  };

  const unarchiveHandler = (id) => {
    unarchiveNote(id).then(() => {
      navigate("/");
    });
  };

  const deleteHandler = (id) => {
    if (window.confirm("Apakah kamu yakin?")) {
      deleteNote(id).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <NoteDetail
      notes={notes}
      archiveNote={archiveHandler}
      unarchiveNote={unarchiveHandler}
      deleteNote={deleteHandler}
    />
  );
}

export default DetailPage;
