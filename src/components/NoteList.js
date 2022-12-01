import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";

function NoteList({ notes, onArchive, onDelete, onRestore }) {
  if (notes.length === 0) {
    return <p className="note-empty">Tidak ada catatan untuk ditampilkan</p>;
  } else {
    return (
      <div className="note-list">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            date={note.date}
            onArchive={onArchive}
            onDelete={onDelete}
            onRestore={onRestore}
            {...note}
          />
        ))}
      </div>
    );
  }
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func,
};

export default NoteList;
