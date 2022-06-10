import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Wrapper, Gradient, Card } from "../StyledComponents";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    getRecipe();
    deviceSize();
  }, []);

  const getRecipe = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  };
  const deviceSize = () => {
    if (window.innerWidth === "600px") {
      // true for mobile device
      return setIsMobile(true);
    } else {
      return;
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
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
            {popular.map((recipe) => {
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
            {popular.map((recipe) => {
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

export default Popular;
