import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMovie, getMovies } from "../redux/actions/movies";
import { Button, Image } from "react-bootstrap";

export default function Movie() {
  let { _id } = useParams();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const loading = useSelector((state) => state.movies.loading);
  const error = useSelector((state) => state.movies.error);
  const [movieId, setMovieId] = useState(_id);
  const [selectedMovie, setSelectedMovie] = useState({});

  console.log("ID ", _id);

  useEffect(() => {
    // dispatch(getMovie());
    // dispatch(getMovies()); //- TODO Learning
    console.log("Movie ID ", movieId);

    console.log("in Movie Detail Page", movies);

    console.log(
      movies.find((f) => f._id == movieId),
      "selected Movie"
    );
    setSelectedMovie(movies.find((f) => f._id == movieId));
    // console.log(selectedMovie, "selectedMovie");
  }, []);

  const { name, rate, duration, imageUrl } = selectedMovie
    ? selectedMovie
    : { name: "Sivaji", rating: "4.5" };
  // console.log(name, releasedt);

  return (
    <div>
      <h1>Movie Name: {name}</h1>
      {/* {releasedt ? <h3>Release Date: {releasedt}</h3> : " "} */}
      <h3>Rating: {rate}</h3>
      <Image rounded src={imageUrl} />
      <Button variant="warning">
        <Link to={`/bookmovie/${movieId}`}> Book now</Link>
      </Button>
    </div>
  );
}
