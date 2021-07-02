import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUpcoming } from "../redux/actions/upcoming";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardGroup } from "react-bootstrap";

export default function Latest() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);

  useEffect(() => {
    dispatch(getUpcoming());
  }, []);

  console.log("from API", movies);
  return (
    <>
      {movies.loading && <p>Loading...</p>}
      {movies.length === 0 && !loading && <p>No movie available!</p>}
      {error && !loading && <p>{error}</p>}

      <h1> Upcoming Movies</h1>
      <CardGroup>
        {movies.length > 0 &&
          movies.map((movie, i) => (
            <Card style={{ width: "10rem" }} key={i}>
              <Link to={`/moviedetails/${movie._id}`} key={movie._id}>
                <Card.Img
                  variant="top"
                  src={movie.imageUrl}
                  className="custom"
                />
              </Link>
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Button variant="warning">
                  <Link to={`/bookmovie/${movie._id}`} key={movie._id}>
                    Book
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          ))}
      </CardGroup>
    </>
  );
}
