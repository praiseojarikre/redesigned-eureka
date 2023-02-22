import logo from './logo.svg';
import './App.css';
// import Fetcher from './componenets/Fetcher';
import Home from './componenets/Home';
import About from './componenets/About';
import Products from './componenets/Products';
import Error from './componenets/Error';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './componenets/Footer';
import Navbar from './componenets/Navbar';
import SingleProducts from './componenets/SingleProducts';
import { useEffect, useState } from 'react';
import Cart from './componenets/Cart';


const cartItemsfromLocalstorage = JSON.parse(localStorage.getItem('PraiseItem')) || []

function App() {
  const [PraiseItem, PraisecartItem] = useState(cartItemsfromLocalstorage)
  useEffect(()=>{
    localStorage.setItem('PraiseItem' , JSON.stringify(PraiseItem))
}, [PraiseItem])

function handleAddtocart(product) {
  const productSeleted = PraiseItem.find((singleItem)=> singleItem.id === product.id)
  if (productSeleted) {
      PraisecartItem(PraiseItem.map((oneItem)=>oneItem.id ===product.id ?{...productSeleted,quantity: productSeleted.quantity + 1}: oneItem))
      
  } else{
      PraisecartItem([...PraiseItem,{...productSeleted , quantity:1}])
  }
}

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar PraiseItem = {PraiseItem}/>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="About" element ={<About/>}/>
        <Route path="Products" element ={<Products PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>}/> 
        <Route path="Cart" element ={<Cart PraiseItem = {PraiseItem} PraisecartItem = {PraisecartItem} handleAddtocart = {handleAddtocart}/>}/> 
        
        <Route path="SingleProducts/:id" element={<SingleProducts/>}/>
        <Route path="*" element ={<Error/>}/>
       
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <Fetcher/> */}

 
    </div>
  );
}

export default App;
