import React from "react";
import Infos from "./Infos";
import NavBar from "./../NavBar/NavBar";

import "./MainContent.css";

export default function Header() {
  return (
    <header className="header">
      <NavBar />
      <Infos />
    </header>
  );
}
