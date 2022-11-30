import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, unarchiveNote, trashNote } from "../utils/data";

function ArchivePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <ArchivePage defaultKeyword={keyword} onSearch={changeSearchParams} />;
}

class ArchivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onUnarchiveHandler = this.onUnarchiveHandler.bind(this);
    this.onTrashHandler = this.onTrashHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onUnarchiveHandler(id) {
    unarchiveNote(id);
    this.setState({
      notes: getArchivedNotes(),
    });
  }

  onTrashHandler(id) {
    trashNote(id);
    this.setState({
      notes: getArchivedNotes(),
    });
  }

  onSearchHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.onSearch(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archive-page">
        <div className="archive-page__search">
          <SearchBar
            keyword={this.state.keyword}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="archive-page__note">
          <NoteList
            notes={notes}
            onArchive={this.onUnarchiveHandler}
            onDelete={this.onTrashHandler}
          />
        </div>
      </section>
    );
  }
}

ArchivePage.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultKeyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArchivePageWrapper;
