import React, { useState, useEffect } from "react";
import Jewelries from "./Jewelries";
import Men from "./Men";
import Women from "./Women";
import Electronics from "./Electronics";


const Products = ({PraiseItem,PraisecartItem, handleAddtocart}) => {


  return (
    <div className="data">

      <Jewelries PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>
      <Men PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>
      <Women PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>
      <Electronics PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>    
      
    </div>
  );
};

export default Products;