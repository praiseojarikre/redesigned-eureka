import React from "react";
import { Link } from "react-router-dom";
import {GrCart} from "react-icons/gr"
import Marquee from "./Marquee";

const Navbar = ({PraiseItem}) => {
  console.log(PraiseItem);
  return (
    <div>
       <div className="soft">
      <div className="shop">
        <h2><span>PM</span>SHOP</h2>
      </div>

      <div className="link">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="About">About</Link>
          </li>
          <li>
            <Link to="Products">Products</Link>
          </li>
          <li>
            <Link to="Cart"><GrCart/>Cart({PraiseItem.length})</Link>
          </li>
          <button>LOG IN</button>
        
          <li>
            <Link to="Products">Sign Up</Link>
          </li>
          
        </ul>
        <div>
        </div>
      </div>
    </div>
          <Marquee/>
    </div>
   
  );
};

export default Navbar;
