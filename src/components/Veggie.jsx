import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Wrapper, Gradient, Card } from "../StyledComponents";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    getVeggie();
    deviceSize();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  const deviceSize = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // true for mobile device
      return setIsMobile(true);
    } else {
      return;
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Our Veggie Picks</h3>
        {isMobile ? (
          <Splide
            options={{
              perPage: 1,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "3rem",
            }}
          >
            {veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        ) : (
          <Splide
            options={{
              perPage: 3,
              arrows: false,
              pagination: false,
              drag: "free",
              gap: "5rem",
            }}
          >
            {veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card key={recipe.id}>
                    <Link to={`/recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt={recipe.title} />
                      <Gradient />
                    </Link>
                  </Card>
                </SplideSlide>
              );
            })}
          </Splide>
        )}
      </Wrapper>
    </div>
  );
};

export default Veggie;
