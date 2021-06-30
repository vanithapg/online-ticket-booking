import React, { useEffect } from "react";
import { Image, Button, Card, CardGroup, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getEvents } from "../redux/actions/events";
import { useDispatch, useSelector } from "react-redux";

export default function Events() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);
  const loading = useSelector((state) => state.events.loading);
  const error = useSelector((state) => state.events.error);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  console.log("from API", events);
  return (
    <>
      {events.loading && <p>Loading...</p>}
      {events.length === 0 && !loading && <p>No events available!</p>}
      {error && !loading && <p>{error}</p>}

      <h1> Events</h1>
      <CardGroup className="custom">
        {events.length > 0 &&
          events.map((event) => (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={event.url} className="events" />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </CardGroup>
    </>
  );
}
