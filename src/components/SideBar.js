import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  MdOutlineNotes,
  MdOutlineArchive,
  MdAddCircleOutline,
  MdOutlineLogout,
} from "react-icons/md";
import { LocaleConsumer } from "../contexts/LocaleContext";

function SideBar({ logout }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <div className="side-bar">
            <nav className="side-bar__top">
              <div className="side-bar__logo">
                <Link to="/" className="logo-link">
                  dicatat
                </Link>
              </div>
              <Link to="/" className="nav-link">
                <div className="nav-icon">
                  <MdOutlineNotes />
                </div>
                <p className="nav-title">
                  {locale === "id" ? "Catatan" : "Notes"}
                </p>
              </Link>
              <Link to="/archive" className="nav-link">
                <div className="nav-icon">
                  <MdOutlineArchive />
                </div>
                <p className="nav-title">
                  {locale === "id" ? "Arsip" : "Archive"}
                </p>
              </Link>
              <Link to="/create" className="nav-link">
                <div className="nav-icon">
                  <MdAddCircleOutline />
                </div>
                <p className="nav-title">
                  {locale === "id" ? "Buat Catatan" : "Create Note"}
                </p>
              </Link>
            </nav>
            <div className="side-bar__bottom">
              <Link to="/" className="nav-link" onClick={logout}>
                <div className="nav-icon">
                  <MdOutlineLogout />
                </div>
                <p className="nav-title">
                  {locale === "id" ? "Keluar" : "Logout"}
                </p>
              </Link>
            </div>
          </div>
        );
      }}
    </LocaleConsumer>
  );
}

SideBar.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default SideBar;
