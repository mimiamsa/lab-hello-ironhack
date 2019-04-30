import React from "react";
import "./Reinsurance.css"

export default function reinsurance({img, title, subtitle}) {
  return (
    <div className="Resinsurance-element-container">
      <img alt="a nice pic" className="nice-image" src={img}/>
      <h1 className="re-title">{title}</h1>
      <h3 className="re-subtitle">{subtitle}</h3>
    </div>
  );
}


