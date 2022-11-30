import React from "react";
import { Link } from "react-router-dom";

function NoteLogo() {
  return (
    <div className="note-logo">
      <Link to="/" className="note-logo__link">
        dicatat
      </Link>
    </div>
  );
}

export default NoteLogo;
