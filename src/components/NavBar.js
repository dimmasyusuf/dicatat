import React from "react";
import PropTypes from "prop-types";
import { MdSearch } from "react-icons/md";
import Language from "./Language";
import ToggleTheme from "./ToggleTheme";
import { LocaleConsumer } from "../contexts/LocaleContext";

function NavBar({ keyword, onSearch }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="navbar">
            <div className="navbar-search">
              <div className="navbar-search__icon">
                <MdSearch />
              </div>
              {locale === "id" ? (
                <input
                  className="navbar-search__input"
                  type="text"
                  placeholder="Cari catatan..."
                  value={keyword}
                  onInput={(event) => onSearch(event.target.value)}
                />
              ) : (
                <input
                  className="navbar-search__input"
                  type="text"
                  placeholder="Search notes..."
                  value={keyword}
                  onInput={(event) => onSearch(event.target.value)}
                />
              )}
            </div>
            <div className="navbar-right">
              <Language />
              <ToggleTheme />
            </div>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

NavBar.propTypes = {
  keyword: PropTypes.string,
  onSearch: PropTypes.func,
};

export default NavBar;
