import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="nav-container">
      <nav className="nav-infos">
        <Logo />
        <Menu />
      </nav>
    </div>
  );
}
