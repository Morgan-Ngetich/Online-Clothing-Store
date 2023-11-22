// import React, { useState, useEffect } from 'react';

function Shirts({isproduct,onAddToCart}) {
  

 
  
  return (
    <div className="card-container">
     
      {/* Render the fetched shirt data here */}
      {isproduct?.shirts?.map(shirt => (
        <div className= "card" key={shirt.id}>
          <img className="card-image" src={shirt.image} alt= {shirt.name}/>
          <div className="card-details">
          <p> {shirt.name}</p>
          <p><span>Brand:</span> {shirt.brand}</p>
          <p><span>Price:</span> {shirt.price}</p>
          <p><span>Size:</span> {shirt.size}</p>
          <p><span>Stock:</span> {shirt.stock}</p>
         
          <button className="add-to-cart" onClick={() => onAddToCart(shirt)} >Add To Cart</button>
          </div>
          
       
        </div>
      ))}
    </div>
  );
}

export default Shirts;

