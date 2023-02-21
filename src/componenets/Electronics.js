import React from "react";
import useFetch from "./Fetcher.js/Usefetch";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";

const Electronics = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  return (
    <div>
      <h3 className="details">
        <span>Electronics</span> Category
      </h3>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <div className="innerdata">
        {data.map((datum) => {
          const { id, title, image, rating, price } = datum;
          return (
            <div className="innerdatas" key={id}>
              <Link to={`/SingleProduct/${id}`}>
                <img src={image} alt="" className="images" />
                <h2>{rating.rate}</h2>
                <h3>Price ${price}</h3>
                <button>🛒 Add to cart</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Electronics;
