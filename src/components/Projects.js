import React from "react";
import BICT from "./img/BICT.PNG";

export default function Projects() {
  return (
    <div className="my-projects">
      <h2>Latest projects</h2>
      <div className="logo">
        <img src={BICT} alt=" " />
      </div>
      <div className="company-info">
        <h3>Profile</h3>
        <h1>BICT Rwanda Profile</h1>
        <p>
          I designed the updated BICT Rwanda (Broadcasters of ICT) latest
          updated new profile
        </p>
        <a href="#BICT">View details</a>
      </div>
    </div>
  );
}
