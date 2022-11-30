import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getDeletedNotes, restoreNote, deleteNote } from "../utils/data";

function TrashPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <TrashPage defaultKeyword={keyword} onSearch={changeSearchParams} />;
}

class TrashPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getDeletedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onRestoreHandler = this.onRestoreHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onRestoreHandler(id) {
    restoreNote(id);
    this.setState({
      notes: getDeletedNotes(),
    });
  }

  onDeleteHandler(id) {
    deleteNote(id);
    this.setState({
      notes: getDeletedNotes(),
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
      <section className="trash-page">
        <div className="trash-page__search">
          <SearchBar
            keyword={this.state.keyword}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="trash-page__note">
          <NoteList
            notes={notes}
            onRestore={this.onRestoreHandler}
            onDelete={this.onDeleteHandler}
          />
        </div>
      </section>
    );
  }
}

TrashPage.propTypes = {
  defaultKeyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default TrashPageWrapper;
