import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Products = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetechedData() {
    try {
      setIsLoading(true);
      const fetcher = await fetch("https://fakestoreapi.com/products");
      const res = await fetcher.json();
      console.log(res);
      setData(res);

      
      // fetch('https://fakestoreapi.com/products')
      // .then(res=>res.json())
      // .then(json=>console.log(json))
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    fetechedData();
  }, []);

  return (
    <div className="data">
      <h2 className="details"><span>BLUE</span>MAIN STORE</h2>
      {isLoading && <PulseLoader/>}
      {error && <h2>{error.message}</h2>}
      <div className="innerdata">
      {data.map((datum) => {
        const { id, title, image, rating,price } = datum;
        return (
          <div className="innerdatas"  key={id}>
            {/* <h2>{title}</h2> */}
            <img src={image} alt="" className="images" />
            <h2>{rating.rate}</h2>
            <h3>Price ${price}</h3>
            <button>🛒 Add to cart</button>

          </div>
         
        );
      })}
       </div>
    </div>
  );
};

export default Products;