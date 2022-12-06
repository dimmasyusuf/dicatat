import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineNotes,
  MdOutlineArchive,
  MdAddCircleOutline,
  MdOutlineLogout,
} from "react-icons/md";

function BottomBar({ logout }) {
  return (
    <div className="bottom-bar">
      <nav className="bottom-bar__nav">
        <Link to="/" className="bottom-nav__link">
          <div className="bottom-nav__icon">
            <MdOutlineNotes />
          </div>
        </Link>
        <Link to="/archive" className="bottom-nav__link">
          <div className="bottom-nav__icon">
            <MdOutlineArchive />
          </div>
        </Link>
        <Link to="/create" className="bottom-nav__link">
          <div className="bottom-nav__icon">
            <MdAddCircleOutline />
          </div>
        </Link>
        <Link to="/" className="bottom-nav__link" onClick={logout}>
          <div className="bottom-nav__icon">
            <MdOutlineLogout />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default BottomBar;
