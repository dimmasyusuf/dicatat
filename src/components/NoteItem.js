import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import {
  MdOutlineArchive,
  MdOutlineUnarchive,
  MdOutlineDelete,
} from "react-icons/md";
import { showFormattedDate } from "../utils/data";

function NoteItem({ notes, archiveNote, unarchiveNote, deleteNote }) {
  const { id, title, body, createdAt, archived } = notes;
  const date = showFormattedDate(createdAt);

  return (
    <div className="note-item">
      <Link to={`/detail/${id}`} className="note-item__link">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{date}</p>
        <p className="note-item__body">{parser(body)}</p>
      </Link>
      <div className="note-item__button">
        {archived ? (
          <button
            className="unarchive-button"
            onClick={() => unarchiveNote(id)}
          >
            <MdOutlineUnarchive />
          </button>
        ) : (
          <button className="archive-button" onClick={() => archiveNote(id)}>
            <MdOutlineArchive />
          </button>
        )}
        <button className="delete-button" onClick={() => deleteNote(id)}>
          <MdOutlineDelete />
        </button>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  notes: PropTypes.object.isRequired,
  archiveNote: PropTypes.func,
  unarchiveNote: PropTypes.func,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteItem;
