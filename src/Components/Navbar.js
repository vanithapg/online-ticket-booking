import React from "react";
import Header from "./Header";

export default function Navbar() {
  return (
    <div>
      <h1> Online Booking Ticket Movie</h1>
      <hr />
      <Header />
      <form>
        <input type="textbox" placeholder="Search"></input>
      </form>
    </div>
  );
}
