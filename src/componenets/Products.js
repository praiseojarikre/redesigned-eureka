import React, { useState, useEffect } from "react";
import Jewelries from "./Jewelries";
import Men from "./Men";
import Women from "./Women";
import Electronics from "./Electronics";


const Products = () => {


  return (
    <div className="data">

      <Jewelries/>
      <Men/>
      <Women/>
      <Electronics/>    
      
    </div>
  );
};

export default Products;