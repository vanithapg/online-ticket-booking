import React, { useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";
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
          events.map((event, i) => (
            <Card style={{ width: "10rem" }} key={i}>
              <Card.Img variant="top" src={event.imageUrl} className="events" />
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
      </CardGroup>
    </>
  );
}
