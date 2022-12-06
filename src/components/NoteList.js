import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";
import NoteItem from "./NoteItem";

function NoteList({ notes, archiveNote, unarchiveNote, deleteNote }) {
  if (notes.length === 0) {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <p className="note-empty">
              {locale === "id" ? "Tidak ada catatan" : "No notes"}
            </p>
          );
        }}
      </LocaleConsumer>
    );
  } else {
    return (
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            notes={note}
            archiveNote={archiveNote}
            unarchiveNote={unarchiveNote}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  archiveNote: PropTypes.func,
  unarchiveNote: PropTypes.func,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteList;
