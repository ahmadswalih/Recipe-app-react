import React ,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {Grid,CuisineCard} from '../StyledComponents'

const Searched = () => {

  const [searchedRecipes,setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearchedRecipes = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
    const reciepes = await data.json();
    setSearchedRecipes(reciepes.results);
  }

  useEffect(()=>{
    getSearchedRecipes(params.search)
  },[params.search])


  return (
    <Grid>
        {searchedRecipes.map((item)=>{
          return(
            <CuisineCard key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
            </CuisineCard>
          )
        })}
    </Grid>
  )
}

export default Searched