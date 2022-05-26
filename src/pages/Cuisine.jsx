import React ,{useEffect,useState} from 'react';
import { Link,useParams } from 'react-router-dom';
import {Grid,CuisineCard} from '../StyledComponents'

const Cuisine = () => {

  const [cuisine,setCuisine] = useState([])
  let params = useParams()

  const getCuisine = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
    const reciepes = await data.json();
    setCuisine(reciepes.results);
  }

  useEffect(()=>{
    getCuisine(params.type)
    console.log(params.type);
  },[params.type])
  return (
    <Grid
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duraction:0.5}}
    >
      {cuisine.map((item)=>{
        return(
          <CuisineCard key={item.id}>
            <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title}/>
            <h4>{item.title}</h4>
            </Link>
           </CuisineCard>
        )
        
      })}
    </Grid>
  )
}

export default Cuisine