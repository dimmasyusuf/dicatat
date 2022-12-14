import React from "react";
import { useEffect, useState } from "react";
import NoteList from "../components/NoteList";
import NavBar from "../components/NavBar";
import useSearch from "../hooks/useSearch";
import { getArchivedNotes, unarchiveNote, deleteNote } from "../utils/api";

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useSearch();

  useEffect(() => {
    getArchivedNotes().then((note) => {
      setNotes(note.data);
    });
  }, []);

  const unarchiveHandler = (id) => {
    unarchiveNote(id).then(() => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    });
  };

  const deleteHandler = (id) => {
    if (window.confirm("Apakah kamu yakin?")) {
      deleteNote(id).then(() => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
      });
    }
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archive-page">
      <NavBar onSearch={setKeyword} />
      <NoteList
        notes={filteredNotes}
        unarchiveNote={unarchiveHandler}
        deleteNote={deleteHandler}
      />
    </section>
  );
}

export default ArchivePage;
