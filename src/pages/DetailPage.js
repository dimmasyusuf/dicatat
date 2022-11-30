import React from "react";
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
        createdAt={note.createdAt}
        body={note.body}
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
        createdAt={note.createdAt}
        body={note.body}
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
          createdAt={note.createdAt}
          body={note.body}
          archived={note.archived}
          deleted={note.deleted}
          onArchive={archiveNote}
          onDelete={trashNote}
        />
      </section>
    );
  }
}

export default DetailPage;
