import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../CSS/Cart.css";

export default function Cart() {
    // State to hold cart data
    const [cart, setCart] = useState([]);
  
    // Function to fetch cart from localStorage
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);
  
    // Function to handle quantity change
    const handleQuantityChange = (productId, newQuantity) => {
      if (newQuantity < 1) return; // Don't allow quantity to go below 1
      
      // Update the cart in localStorage
      const updatedCart = cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
      
      // Save the updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart); // Update the state
    };
  
    // Function to calculate the total cost
    const calculateTotalCost = () => {
      return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };
  
    // Function to handle product removal
    const handleRemoveProduct = (productId) => {
      const updatedCart = cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    };
  
    return (
      <div className="cart-container">
        <h1>Good monday</h1>
        <h1>Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleQuantityChange(product.id, parseInt(e.target.value) || 1)
                        }
                        min="1"
                      />
                      <button
                        className="quantity-btn"
                        onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>${(product.price * product.quantity).toFixed(2)}</td>
                    <td>
                      <button className="remove-btn" onClick={() => handleRemoveProduct(product.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            <div className="total-cost">
              <h3>Total Cost: ${calculateTotalCost().toFixed(2)}</h3>
            </div>
          </div>
        )}
      </div>
    );
  }