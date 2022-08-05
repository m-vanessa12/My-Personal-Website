import React from "react";
import profile from "./img/profile.JPG";

export default function About() {
  return (
    <section className="about-me">
      <img src={profile} alt=" " />
      <h1>About Me</h1>
      <svg viewBox="0 0 94 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 10 l145 0"
          stroke="#F08080"
          stroke-width="3"
          stroke-linecap="round"
        ></path>
      </svg>
      <p>
        I am Inspired, motivated, and self-aware with a mission of raising
        mental health awareness in young people, orphans, and teenage mothers
        and to helpthose with mental problems to get support in an easy way
        using technology by thinking outside the box using soft and hard skills.
        I am currently pursuing an honor degree in Computer science at African
        Leadership University.
      </p>
    </section>
  );
}
