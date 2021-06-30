import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie, getMovies } from "../redux/actions/movies";
import { Button, Image } from "react-bootstrap";

export default function Movie() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const [movieId, setMovieId] = useState(id);
  const [selectedMovie, setSelectedMovie] = useState({});

  console.log("ID ", id);

  useEffect(() => {
    // dispatch(getMovie());
    // dispatch(getMovies()); //- TODO Learning
    console.log("Movie ID ", movieId);

    console.log("in Movie Detail Page", movies);

    console.log(
      movies.find((f) => f.id == movieId),
      "selected Movie"
    );
    setSelectedMovie(movies.find((f) => f.id == movieId));
    console.log(selectedMovie, "selectedMovie");
  }, []);

  const { name, releasedt, rating, duration, url } = selectedMovie
    ? selectedMovie
    : { name: "Sivaji", rating: "4.5" };
  console.log(name, releasedt);

  return (
    <div>
      <h1>Movie Name: {name}</h1>
      {releasedt ? <h3>Release Date: {releasedt}</h3> : " "}
      <h3>Rating: {rating}</h3>
      <Image rounded src={url} />
      <Button variant="warning">
        <Link to={`/bookmovie/${movieId}`}> Book now</Link>
      </Button>
    </div>
  );
}
