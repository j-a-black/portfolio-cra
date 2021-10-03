import React from "react";

import Link from "../Route/Link";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-menu">
          <Link href="/" className="menu-link">
            Home
          </Link>
          <Link href="/projects" className="menu-link">
            Projects
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
