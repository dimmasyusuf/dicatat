import React from "react";
import PropTypes from "prop-types";
import parser from "html-react-parser";
import { Link } from "react-router-dom";
import {
  MdOutlineArchive,
  MdOutlineUnarchive,
  MdOutlineDelete,
} from "react-icons/md";
import { showFormattedDate } from "../utils/data";

function NoteDetail({ notes, archiveNote, unarchiveNote, deleteNote }) {
  const { id, title, body, createdAt, archived } = notes;
  const date = showFormattedDate(createdAt);

  return (
    <div className="note-detail">
      <h3 className="note-detail__title">{title}</h3>
      <p className="note-detail__date">{date}</p>
      <p className="note-detail__body">{parser(body)}</p>
      <div className="note-detail__button">
        {archived ? (
          <Link to="/archive" className="note-detail__link">
            <button
              className="unarchive-button"
              onClick={() => unarchiveNote(id)}
            >
              <MdOutlineUnarchive />
            </button>
          </Link>
        ) : (
          <Link to="/" className="note-detail__link">
            <button className="archive-button" onClick={() => archiveNote(id)}>
              <MdOutlineArchive />
            </button>
          </Link>
        )}
        <Link to="/" className="note-detail__link">
          <button className="delete-button" onClick={() => deleteNote(id)}>
            <MdOutlineDelete />
          </button>
        </Link>
      </div>
    </div>
  );
}

NoteDetail.propTypes = {
  notes: PropTypes.object.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteDetail;
