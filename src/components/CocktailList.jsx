import React from "react";
import CocktailCard from "../components/CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";
import { useOutletContext } from "react-router-dom";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>no matching cocktails found </h4>
    );
  }
  const formattedDrinks = drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard {...drink} key={drink.id} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
