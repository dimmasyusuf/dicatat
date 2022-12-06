import React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useSearch from "../hooks/useSearch";
import NoteList from "../components/NoteList";
import NavBar from "../components/NavBar";
import { getActiveNotes, archiveNote, deleteNote } from "../utils/api";

function HomePage() {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useSearch();

  useEffect(() => {
    getActiveNotes().then((note) => {
      setNotes(note.data);
    });
  }, []);

  const archiveHandler = (id) => {
    archiveNote(id).then(() => {
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
    });
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
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
    <section className="home-page">
      <NavBar onSearch={setKeyword} />
      <NoteList
        notes={filteredNotes}
        keyword={keyword}
        archiveNote={archiveHandler}
        deleteNote={deleteHandler}
      />
    </section>
  );
}

HomePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  archiveNote: PropTypes.func,
  deleteNote: PropTypes.func,
};

export default HomePage;
