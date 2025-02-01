import React from 'react';
import '../CSS/Header.css';
import Cart from './Cart';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Header() {  
    return (
        <> 

            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                    <a href="/">MyWebsite</a>
                    </div>
                    <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    </ul>
                    <div className="cart-icon">
                        
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faShoppingCart}/>
                        </Link>
                    </div>
                    
                </div>
                </nav>        
        </>

    )

}