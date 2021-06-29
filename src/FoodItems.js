import React, { useEffect} from 'react'
import Food from './Food'
import {Image} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFoods } from './redux/actions/foods'
import { useDispatch, useSelector} from 'react-redux'

export default function FoodItems() {

    const dispatch = useDispatch();
    const foods = useSelector(state => state.foods.foods);
    const loading = useSelector(state => state.foods.loading);
    const error = useSelector(state => state.foods.error);
  
    useEffect(() => {
      dispatch(getFoods());
    }, [])
  
    console.log('from API', foods)
    return (
      <>
        {foods.loading && <p>Loading...</p>}
        {foods.length === 0 && !loading && <p>No food recipies available!</p>}
        {error && !loading && <p>{error}</p>}
        {foods.length > 0 && foods.map((food) => (
          <Link to={`/food/${food.id}`} key={food.id}><Image  rounded src={food.url}/></Link>
        ))}
      </>
    )
}
