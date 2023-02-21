import React from "react";
import useFetch from "./Fetcher.js/Usefetch";
import PulseLoader from "react-spinners/PulseLoader";
import { Link, useParams } from "react-router-dom";

const SingleProducts = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );
  const { title, description, price, rating, image } = data;
  return (
    <div>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <img src={image} alt="" className="images" />
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>Price ${price}</h3>
      <button>🛒 Add to cart</button>
      <Link to="/Products">Back</Link>
    </div>
  );
};

export default SingleProducts;
