import { useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import './App.css'
import productsData from './components/products.json'
// import { BrowserRouter, Route } from 'react-router-dom'
// import { Route, Switch } from 'react-router-dom'
// import Cart from './components/Cart'

import { Link } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart'

function App() {
  
  return (
    <>
      <Router>
    
        <Header />

        <h1>Our Products</h1>
        <Products products={productsData} />

        {/* <Routes>
          <Route path="/" element={<Products products={productsData} />} />
        </Routes> */}
        <h1>React App</h1>
        <Cart/>
      </Router>
    </>
  )
}

export default App
