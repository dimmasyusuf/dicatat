import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import {
  MdOutlineArchive,
  MdOutlineUnarchive,
  MdOutlineDelete,
  MdOutlineDeleteForever,
  MdOutlineRestoreFromTrash,
} from "react-icons/md";
import { showFormattedDate } from "../utils/data";

function NoteDetail({
  id,
  title,
  body,
  createdAt,
  archived,
  deleted,
  onArchive,
  onDelete,
  onRestore,
}) {
  if (archived === true) {
    return (
      <div className="note-detail">
        <h3 className="note-detail__title">{title}</h3>
        <p className="note-detail__date">{showFormattedDate(createdAt)}</p>
        <p className="note-detail__body">{parser(body)}</p>
        <div className="note-detail__button">
          <Link to="/archive" className="note-detail__link">
            <button className="unarchive-button" onClick={() => onArchive(id)}>
              <MdOutlineUnarchive />
            </button>
          </Link>
          <Link to="/archive" className="note-detail__link">
            <button className="delete-button" onClick={() => onDelete(id)}>
              <MdOutlineDelete />
            </button>
          </Link>
        </div>
      </div>
    );
  } else if (deleted === true) {
    return (
      <div className="note-detail">
        <h3 className="note-detail__title">{title}</h3>
        <p className="note-detail__date">{showFormattedDate(createdAt)}</p>
        <p className="note-detail__body">{parser(body)}</p>
        <div className="note-detail__button">
          <Link to="/trash" className="note-detail__link">
            <button className="restore-button" onClick={() => onRestore(id)}>
              <MdOutlineRestoreFromTrash />
            </button>
          </Link>
          <Link to="/trash" className="note-detail__link">
            <button className="delete-button" onClick={() => onDelete(id)}>
              <MdOutlineDeleteForever />
            </button>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="note-detail">
        <h3 className="note-detail__title">{title}</h3>
        <p className="note-detail__date">{showFormattedDate(createdAt)}</p>
        <p className="note-detail__body">{parser(body)}</p>
        <div className="note-detail__button">
          <Link to="/" className="note-detail__link">
            <button className="archive-button" onClick={() => onArchive(id)}>
              <MdOutlineArchive />
            </button>
          </Link>
          <Link to="/" className="note-detail__link">
            <button className="delete-button" onClick={() => onDelete(id)}>
              <MdOutlineDelete />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func,
};

export default NoteDetail;
