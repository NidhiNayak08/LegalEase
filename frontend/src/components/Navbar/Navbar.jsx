import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">LegalEase</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/mydocs">My Docs</a>
        </li>
        <li>
          <a href="/search">Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
