import React, { useState } from "react";
import "../Styles/cart.css";
import uniqid from 'uniqid';
import Items from './Items';
import Images from './Images';

const Cart = (props) => {
    const cart = props.cart;
    let cartCooldown = false;

    const setCartCooldown = (cd) => {
        const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        async function cooldown() {
            cartCooldown = true;
            await sleep(1000);
            cartCooldown = false;
        }
        cooldown();
    }

    const getItem = (id) => Items.find( (item) => item.id === id );
    
    const round = (num, places) => {
        places = Math.pow(10, places);
        return Math.floor(num * places) / places;
    }

    const toggleCart = (event) => {
        if(cartCooldown) { return; }
        
        if(!event.target.classList.contains('cart-background') && !event.target.classList.contains('close-button')) { return; }
        setCartCooldown();
        
        const cartBackground = document.querySelector('.cart-background');
        const cartIcon = document.querySelector(".cart-icon");
        const cart = document.querySelector(".cart");

        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
        } else {
            cartBackground.classList.add("disable-cart");
            cart.classList.add("cart-disable-animation");
            cart.classList.remove("enable-cart");
            cart.classList.remove("cart-enable-animation");
            cartIcon.classList.remove("disable-cart");
        }
    }

    return (
        <div className="cart-background disable-cart disable-cart-animation initial-class" onClick={toggleCart}>
            <div className="cart disable-cart initial-class">
                <div className="cart-holder">
                    <div>
                        <button className="close-button">X</button>
                    </div>
                    <div>
                        Shopping cart
                    </div>
                    <div className="cart-items">
                        {cart.map( (item) => {
                            const itemObj = getItem(item.id)
                            return (
                                <div 
                                key={uniqid()}
                                className="cart-item"
                                >
                                    
                                    <img alt={item.name} src={Images[item.id]}></img>
                                    <div>
                                        <div className="cart-item-info">
                                            <div>
                                                {itemObj.name}
                                            </div>
                                            <div>
                                                ${round( item.amount * itemObj.price, 2 )}
                                            </div>
                                            <div>
                                                x{item.amount}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;