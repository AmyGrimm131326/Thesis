import { Component, useState, useEffect } from 'react';
import React from "react";
import About from "../components/About"
import FrontPageJumbo from "../components/FrontPageJumbo"
import Cards from "../components/Cards"
import Cart from "../components/Cart"

const Home = (props) => {

    // const[menuItems, setMenuItems] = useState(props.menuItem)
    // const[cart, setCart] = useState([])
// this is where I had to use a empty array to make it stop firing menuItems.

    // this is my function to pass down to my cards so I can set the state on my homepage.
    const updateCart = (orders) => {
        props.updateCart(orders)
    }

        return (
            <div className="container-fluid">
                <About />
                <FrontPageJumbo />
                <div className="row fade-container">
                    {props.menuItems.map((item, i) => {
                        return <Cards cart={props.cart} updateCart={updateCart} menuItem={item} key={i} />
                    })}
                    <Cart cart={props.cart} />

                </div>
            </div>
        )
    }
export default Home;