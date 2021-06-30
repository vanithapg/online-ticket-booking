import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <Link to="/latest">
        <button>Latest Movies</button>
      </Link>
      <Link to="/upcoming">
        <button>Upcoming Movies</button>
      </Link>
      <Link to="/events">
        <button>Events</button>
      </Link>
    </div>
  );
}
