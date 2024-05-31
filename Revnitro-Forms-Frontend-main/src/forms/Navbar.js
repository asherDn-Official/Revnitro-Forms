import React, { useState } from "react";
// import "../CSS/Navbar.css";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="https://revnitro.com" className="title">
        <img
          className="ImageNavbrsixecontrol"
          src="/images/footerlogo.webp"
          alt=""
        />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="https://revnitro.com">Home</NavLink>
        </li>
        <li>
          <NavLink to="https://blog.revnitro.com">Blog</NavLink>
        </li>
        <li>
          <NavLink target="_blank" to="https://forum.revnitro.com/">
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink to="https://revnitro.com/car&bike-event.html">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="https://revnitro.com/team.html">Team</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
