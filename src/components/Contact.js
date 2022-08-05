import React from "react";

export default function Contact() {
  return (
    <div className="form">
      <h1>Contact Me</h1>
      <form>
        <input type="text" name="names" placeholder="Your names" />
        <input type="text" name="email" placeholder="Your Email" />
        <br />
        <textarea> Send a Message</textarea>
        <br />
        <button>send</button>
      </form>
    </div>
  );
}
