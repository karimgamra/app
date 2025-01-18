import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";
import { Link } from "react-router-dom";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={image} alt="" />
        <div className="footer">
          <h4>{name} </h4>
          <h5>{glass}</h5>
          <p>{info}</p>
          <Link to={`/cocktail/${id}`}>details</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
