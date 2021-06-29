import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
// import Breadcrumb from "react-bootstrap/Breadcrumb";

export default function Recipe() {
  let { id } = useParams();

  const foods = useSelector((state) => state.foods.foods);

  const [recipeId, setRecipeId] = useState(id);
  const [selectedFood, setSelectedFood] = useState({});

  console.log("ID ", id);

  useEffect(() => {
    console.log(
      foods.find((f) => f.id == recipeId),
      "selected receipe"
    );
    setSelectedFood(foods.find((f) => f.id == recipeId));
    console.log(selectedFood, "selectedFood");
  }, []);

  const { name, url, desc, ingredients, recipe } = selectedFood
    ? selectedFood
    : undefined;
  console.log(name, desc);

  return selectedFood ? (
    <div>
      {/* <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href={`/food/${id}`}>FoodDetail</Breadcrumb.Item>
        <Breadcrumb.Item active>Recipe</Breadcrumb.Item>
      </Breadcrumb> */}

      <center>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {desc}
              <li>{ingredients}</li>
              <li>{recipe}</li>
            </Card.Text>
            <Button variant="warning">
              <Link to="/">Back to Home</Link>
            </Button>
          </Card.Body>
        </Card>
      </center>
    </div>
  ) : (
    <div> No Recipe Found</div>
  );
}
