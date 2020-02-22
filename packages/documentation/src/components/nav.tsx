import React, { FC } from "react";
import { NavLink } from "react-router-dom";

import "./nav.css";

export const Nav: FC = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/home"
        activeClassName="nav-link--active"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/basic"
        activeClassName="nav-link--active"
        className="nav-link"
      >
        Basic
      </NavLink>
      <NavLink
        to="/custom-styling"
        activeClassName="nav-link--active"
        className="nav-link"
      >
        Custom Styling
      </NavLink>
      <NavLink
        to="/pixabay-search"
        activeClassName="nav-link--active"
        className="nav-link"
      >
        Pixabay Search
      </NavLink>
    </nav>
  );
};
