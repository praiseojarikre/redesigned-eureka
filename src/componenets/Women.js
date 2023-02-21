import React from "react";
import useFetch from "./Fetcher.js/Usefetch";
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from "react-router-dom";

const Women = () => {
  const { data, isLoading, error } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );

  return (
    <div>
      <h3 className="details">
        <span>Women</span> Category
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

export default Women;
