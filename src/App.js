import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";
// import FoodItems from "./FoodItems";
// import Recipe from "./Recipe";
import Movie from "./Components/Movie";
import HomePage from "./Components/HomePage";
import Navibar from "./Components/Navbar";
import BookMovie from "./Components/BookMovie";
import Latest from "./Components/Latest";
import Upcoming from "./Components/Upcoming";
import Events from "./Components/Events";

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
      <Router>
        <Navibar />

        <Route exact path="/" component={HomePage} />
        <Route path="/moviedetails/:id" component={Movie}></Route>
        <Route path="/latest" component={Latest}></Route>
        <Route path="/upcoming" component={Upcoming}></Route>
        <Route path="/events" component={Events}></Route>
        <Route path="/bookmovie/:id" component={BookMovie}></Route>
      </Router>
    </div>
  );
}

export default App;
