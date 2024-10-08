import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo left">
        <a href="/">LegalEase</a>
      </div>
      <div className="mid">
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
            <a href="/mydocs">Templates</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <ul className="navbar-links">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signUp">SignUp</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
