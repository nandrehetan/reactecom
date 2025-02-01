import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import 'products.json';
import "../CSS/Products.css";

export default function Products({ products }) {

    function handleAddToCart (product, quantity)  {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const productIndex = existingCart.findIndex((item) => item.id === product.id);
    
        if (productIndex >= 0) {
          existingCart[productIndex].quantity += quantity;
        } else {
          existingCart.push({ ...product, quantity });
        }
    
        localStorage.setItem("cart", JSON.stringify(existingCart));
        alert(`${product.name} has been added to your cart with quantity ${quantity}!`);
      };



    function ProductCard  ({ product })  {
        const [quantity, setQuantity] = useState(1);
    
        function increaseQuantity (){
            setQuantity((prevQuantity) => prevQuantity + 1);
        } 
        function decreaseQuantity ()  {
          if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
          }
        };
    
        return (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">₹ {product.price}</p>
    
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={decreaseQuantity}>-</button>
                <span className="quantity-display">{quantity}</span>
                <button className="quantity-btn" onClick={increaseQuantity}>+</button>
              </div>
    
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product, quantity)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
    };
    


    return(
        <>
            <div className="products-container">
                <div className="product-grid">
                    {
                        products.map((product) => (

                            <ProductCard key={product.id} product={product} />

                        ))
                    }
                </div>
                
            </div>
        </>
    )
}