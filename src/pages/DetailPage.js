import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  trashNote,
  restoreNote,
  deleteNote,
} from "../utils/data";
import NoteDetail from "../components/NoteDetail";

function DetailPage() {
  const { id } = useParams();
  const note = getNote(id);

  if (note.archived === true) {
    return (
      <NoteDetail
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
        deleted={note.deleted}
        onArchive={unarchiveNote}
        onDelete={trashNote}
      />
    );
  } else if (note.deleted === true) {
    return (
      <NoteDetail
        id={note.id}
        title={note.title}
        body={note.body}
        createdAt={note.createdAt}
        archived={note.archived}
        deleted={note.deleted}
        onDelete={deleteNote}
        onRestore={restoreNote}
      />
    );
  } else {
    return (
      <section className="detail-page">
        <NoteDetail
          id={note.id}
          title={note.title}
          body={note.body}
          createdAt={note.createdAt}
          archived={note.archived}
          deleted={note.deleted}
          onArchive={archiveNote}
          onDelete={trashNote}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  deleted: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onRestore: PropTypes.func.isRequired,
};

export default DetailPage;
