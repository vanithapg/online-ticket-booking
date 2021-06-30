import React from "react";
import Header from "./Header";

export default function Navbar() {
  return (
    <div>
      <a href="/">
        <h1> Online Booking Ticket Movie</h1>
      </a>
      <form>
        <input type="textbox" placeholder="Search"></input>
      </form>
      <hr />
      <Header />
    </div>
  );
}
