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

function NoteItem({
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
      <div className="note-item">
        <Link to={`/note/${id}`} className="note-item__link">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{parser(body)}</p>
        </Link>
        <div className="note-item__button">
          <button className="unarchive-button" onClick={() => onArchive(id)}>
            <MdOutlineUnarchive />
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    );
  } else if (deleted === true) {
    return (
      <div className="note-item">
        <Link to={`/note/${id}`} className="note-item__link">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{parser(body)}</p>
        </Link>
        <div className="note-item__button">
          <button className="restore-button" onClick={() => onRestore(id)}>
            <MdOutlineRestoreFromTrash />
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <MdOutlineDeleteForever />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="note-item">
        <Link to={`/note/${id}`} className="note-item__link">
          <h3 className="note-item__title">{title}</h3>
          <p className="note-item__date">{showFormattedDate(createdAt)}</p>
          <p className="note-item__body">{parser(body)}</p>
        </Link>
        <div className="note-item__button">
          <button className="archive-button" onClick={() => onArchive(id)}>
            <MdOutlineArchive />
          </button>
          <button className="delete-button" onClick={() => onDelete(id)}>
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    );
  }
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func,
};

export default NoteItem;
