import React, { useEffect } from "react";
import Movie from "./Movie";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getUpcoming } from "../redux/actions/upcoming";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

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

      <h1> Latest Movies</h1>
      {movies.length > 0 &&
        movies.map((movie) => <Image rounded src={movie.url} />)}
    </>
  );
}
