import axios from "axios";
import { Link, useLoaderData, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};
export const loader = async ({ params }) => {
  return { id: params.id };
};

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data, isLoading, error, isError } = useQuery({
    ...singleCocktailQuery(id),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  const singleData = data.drinks[0];
  const strIngredient = Object.keys(singleData)
    .filter(
      (item) => item.startsWith("strIngredient") && singleData[item] !== null
    )
    .map((key) => singleData[key]);

  const {
    strDrink: name,
    strCategory: category,
    strAlcoholic: info,
    strGlass: glass,
    strInstructions: instructions,
    strDrinkThumb: image,
  } = singleData;

  return (
    <Wrapper>
      <Link to="/" className="button">
        back home
      </Link>
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <p>
          <span>name</span> : {name}
        </p>
        <p>
          <span>category</span>: {category}
        </p>
        <p>
          <span>info:{info}</span> :
        </p>
        <p>
          <span>glass</span> : {glass}
        </p>
        <p>
          <span>strIngredient : </span>
          {strIngredient.map((item, index) => {
            return (
              <>
                {item}
                {index < strIngredient.length - 1 ? "," : ""}
              </>
            );
          })}
        </p>
        <p>
          <span>instructions</span> : {instructions}
        </p>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
