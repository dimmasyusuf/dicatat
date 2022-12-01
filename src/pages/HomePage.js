import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { getActiveNotes, archiveNote, trashNote } from "../utils/data";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} onSearch={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onTrashHandler = this.onTrashHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onArchiveHandler(id) {
    archiveNote(id);
    this.setState({
      notes: getActiveNotes(),
    });
  }

  onTrashHandler(id) {
    trashNote(id);
    this.setState({
      notes: getActiveNotes(),
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
      <section className="home-page">
        <div className="home-page__search">
          <SearchBar
            keyword={this.state.keyword}
            onSearch={this.onSearchHandler}
          />
        </div>
        <div className="home-page__note">
          <NoteList
            notes={notes}
            onArchive={this.onArchiveHandler}
            onDelete={this.onTrashHandler}
          />
        </div>
      </section>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

export default HomePageWrapper;
