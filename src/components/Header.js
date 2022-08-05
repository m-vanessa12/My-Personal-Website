import React from "react";

export default function Header() {
  return (
    <div className="heading">
      <div className="gradient">
        <nav className="menu-bar">
          <h1>Vanessa M</h1>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experiences">Experiences</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="summary">
          <p>I Am Vanessa Mukamanzi</p>
          <h1>
            A graphic designer, website designer & Mental health advocate{" "}
          </h1>
          <a href="#Contact">Contact me</a>
        </div>
      </div>
    </div>
  );
}
