import * as type from "../types";

export function getMovies() {
  console.log("inside Action getMovie");
  return {
    type: type.GET_MOVIES_REQUESTED,
  };
}

export function getMovie() {
  console.log("inside Action getMovie");
  return {
    type: type.GET_MOVIEDETAILS_REQUESTED,
  };
}
