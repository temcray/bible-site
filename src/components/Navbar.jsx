import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="p-4 shadow-md flex justify-between">
      <div>
        <Link to="/" className="hover:opacity-75">
          Home
        </Link>
        <Link to="/devotions" className="hover:opacity-75">
          Devotions
        </Link>
        <Link to="/about" className="hover:opacity-75">
          About
        </Link>
        <Link to="/contact" className="hover:opacity-75">
          Contact
        </Link>
        <Link to="/bible" className="hover:opacity-75">
          Bible
        </Link>
        <Link to="/encouragement" className="hover:opacity-75">
          Encouragement
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
