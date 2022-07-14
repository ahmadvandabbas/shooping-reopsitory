import React, { useState } from 'react';
import './App.css';

import {BrowserRouter as Router
} from "react-router-dom";
import Routes from './Routes/Routes';
import data from './components/Data';
import Header from './components/Header';


export default function App() {

  const {productItems} = data
  const[cartItems,setCartItems]= useState([]);


  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id === product.id);
    if (ProductExist){
      setCartItems(cartItems.map((item)=>item.id === product.id ?
      {...ProductExist,quantity:ProductExist.quantity+1}:item)
      );
   } else{
     setCartItems([...cartItems,{...product,quantity:1 }]);
    };
  };




  const handleRemoveProduct = (product)=>{
    const ProductExist=cartItems.find((item)=>item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item)=> item.id !==product.id))
    }else{
      setCartItems(
        cartItems.map((item)=>item.id === product.id?{...ProductExist,quantity:ProductExist.quantity-1}:item)
      )
    };
  };



  const handleCartClearance = () => {
    setCartItems([]);
  }



  return (
<div className='App'>
   <Router>
      <Header cartItems={cartItems}/>
      <Routes
       productItems={productItems}
       cartItems={cartItems} 
       handleAddProduct={handleAddProduct}
       handleRemoveProduct={handleRemoveProduct}
       handleCartClearance={handleCartClearance}/>
   </Router>
</div>
  );
}
