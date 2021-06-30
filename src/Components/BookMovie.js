import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Toast } from "react-bootstrap";
import DatePicker from "react-date-picker";
import QRCode from "react-qr-code";

// import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function BookMovie() {
  let { id } = useParams();

  const movies = useSelector((state) => state.movies.movies);

  const [movieId, setMovieId] = useState(id);
  const [selectedMovie, setSelectedMovie] = useState({});
  const [seats, setSeats] = useState(1);
  const [ticket, setTicket] = useState(false);
  const [show, setShow] = useState(false);
  const [time, onChange] = useState(new Date());

  console.log("ID ", id);

  useEffect(() => {
    console.log(
      movies.find((f) => f.id == movieId),
      "selected movie"
    );
    setSelectedMovie(movies.find((f) => f.id == movieId));
    console.log(selectedMovie, "selectedMovie");
  }, []);

  const { name, url, rating } = selectedMovie ? selectedMovie : undefined;
  console.log(name, rating);

  function generateQR() {
    console.log(name, time, seats, "generate qr");
    setTicket(true);
    setShow(true);
  }

  return selectedMovie ? (
    <div>
      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text></Card.Text>
            <DatePicker onChange={onChange} value={time} />
            <br />
            <label>Available Show timings:</label>
            <select>
              <option>12 PM</option>
              <option>3 PM</option>
              <option>6 PM</option>
            </select>
            <br />
            <label>Number of Seats:</label>
            <select value={seats} onChange={(e) => setSeats(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
            <button onClick={() => generateQR()}>Book</button>
          </Card.Body>
        </Card>
        {ticket ? (
          <>
            <Toast
              onClose={() => setShow(false)}
              show={show}
              delay={3000}
              autohide
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Ticket Confirmed</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>Ticket Booked</Toast.Body>
            </Toast>
            <QRCode value={JSON.stringify(name + time + seats)} />
          </>
        ) : (
          ""
        )}
      </center>
    </div>
  ) : (
    <div> No Movie Found</div>
  );
}
