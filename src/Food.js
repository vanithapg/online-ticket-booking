import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { Link, useParams } from "react-router-dom";
import { getFood, getFoods } from './redux/actions/foods'
import { Button } from 'react-bootstrap'

export default function Food() {

    let { id } = useParams();

    const dispatch = useDispatch();
    const foods = useSelector(state => state.foods.foods);
    const loading = useSelector(state => state.foods.loading);
    const error = useSelector(state => state.foods.error);
    const [foodId, setFoodId] = useState(id)
    const[selectedFood, setSelectedFood] = useState({})

    console.log('ID ', id)
    
    useEffect(() => {
    // dispatch(getFood());
    // dispatch(getFoods()); //- TODO Learning
    console.log('Food ID ', foodId)

    console.log('in Food Detail Page', foods)

    console.log(foods.find(f=>f.id==foodId), 'selected Food')
    setSelectedFood(foods.find(f=>f.id==foodId))
    console.log(selectedFood, 'selectedFood')
}, [])

    const { name, desc } = selectedFood ? selectedFood : { name: "Poori", desc: "Wow"}
    console.log(name, desc)

    return (
        <div>
            <h1>{name}</h1>
            <h3>{desc}</h3>
            <Button variant="warning"><Link to={`/recipe/${foodId}`}> Show me Recepie</Link></Button>
        </div>
    )
}
