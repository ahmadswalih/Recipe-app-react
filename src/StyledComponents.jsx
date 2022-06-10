import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
export const Wrapper = styled.div`
  margin: 4rem 0;
`;

export const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    color: #fff;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
`;

export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  z-index: 3;
  border-radius: 2rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;
export const CuisineCard = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export const Slink = styled(NavLink)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  @media only screen and (max-width: 768px) {
    border-radius: 50%;
    width: 88px;
    margin-right: 1rem;
    margin: auto;
    svg {
      justify-content: center;
    }
    h4 {
      font-size: 0.8rem;
    }
  }
`;
export const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media only screen and (max-width: 600px) {
    margin: 0rem 1rem;
  }
`;
export const DetailWrapper = styled.div`
  margin-top: 10rem inherit 5rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    margin: 1rem 0;
    font-size: 1.1rem;
    line-height: 1.8rem;
    &:first-child {
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;

    img {
      width: 23rem;
    }
  }
`;
export const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
export const Info = styled.div`
  margin-left: 10rem;

  @media only screen and (max-width: 600px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;
export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`;
export const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
