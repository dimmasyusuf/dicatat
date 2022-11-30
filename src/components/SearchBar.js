import React from "react";
import PropTypes from "prop-types";
import { MdSearch } from "react-icons/md";

function SearchBar({ keyword, onSearch }) {
  return (
    <div className="search-bar">
      <div className="search-bar__icon">
        <MdSearch />
      </div>
      <input
        className="search-bar__input"
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onInput={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
