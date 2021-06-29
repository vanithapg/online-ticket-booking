import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";
// import FoodItems from "./FoodItems";
// import Recipe from "./Recipe";
import Movie from "./Components/Movie";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import BookMovie from "./Components/BookMovie";
function App() {
  // const [foodItems, setFoodItems ] = useState([]);

  // useEffect(() => {
  //     fetch("http://localhost:6800/food", { method: "GET" })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //         console.log(data);
  //       setFoodItems(data);
  //     });
  // }, [])

  return (
    <div className="App">
      <Navbar />
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/moviedetails/:id" component={Movie}></Route>
        <Route path="/bookmovie/:id" component={BookMovie}></Route>
      </Router>
    </div>
  );
}

export default App;
