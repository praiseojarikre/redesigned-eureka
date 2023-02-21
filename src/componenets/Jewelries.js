import React from 'react'
import useFetch from './Fetcher.js/Usefetch'
import PulseLoader from "react-spinners/PulseLoader";
import { Link } from 'react-router-dom';


const Jewelries = () => {
 
 const {data, isLoading , error} = useFetch(
    'https://fakestoreapi.com/products/category/jewelery'
 )
 return(
    <div>
       
 <h2 className="details"><span>PM</span> MAIN STORE</h2>
 <h3 className="details"><span>Jewelry</span> Category</h3>

      {isLoading && <PulseLoader/>}
      {error && <h2>{error.message}</h2>}
      <div className="innerdata">
      {data.map((datum) => {
        const { id, image,price } = datum;
        return (
          <div className="innerdatas"  key={id}>
            <Link to = {`/SingleProducts/${id}`}>
             <img src={image} alt="" className="images" />
             <div id='rp'>
            <h3>Price ${price}</h3>   
             </div>
             </Link>
            <button>🛒 Add to cart</button> 

</div>
         
         );
       })}
       li
        </div>




    </div>
 )

    
  
}

export default Jewelries