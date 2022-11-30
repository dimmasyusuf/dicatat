import React from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineNotes,
  MdOutlineArchive,
  MdOutlineDelete,
  MdAddCircleOutline,
} from "react-icons/md";

function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar__logo">
        <Link to="/" className="logo-link">
          dicatat
        </Link>
      </div>
      <nav className="side-bar__nav">
        <Link to="/" className="nav-link">
          <div className="nav-icon">
            <MdOutlineNotes />
          </div>
          <p className="nav-title">Catatan</p>
        </Link>
        <Link to="/archive" className="nav-link">
          <div className="nav-icon">
            <MdOutlineArchive />
          </div>
          <p className="nav-title">Arsip</p>
        </Link>
        <Link to="/trash" className="nav-link">
          <div className="nav-icon">
            <MdOutlineDelete />
          </div>
          <p className="nav-title">Tempat Sampah</p>
        </Link>
        <Link to="/create" className="nav-link">
          <div className="nav-icon">
            <MdAddCircleOutline />
          </div>
          <p className="nav-title">Buat Catatan</p>
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
