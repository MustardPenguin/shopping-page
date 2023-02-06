import React, { useState } from "react";
import "../Styles/cart.css";

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

    const toggleCart = (event) => {
        if(cartCooldown) { return; }
        
        if(event.target.classList.contains("cart")) { return; }
        setCartCooldown();

        const cartBackground = document.querySelector('.cart-background');
        const cartIcon = document.querySelector(".cart-icon");
        const cart = document.querySelector(".cart");

        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
        } else {
            cartBackground.classList.add("disable-cart");
            /*cart.classList.add("disable-cart");*/
            cart.classList.add("cart-disable-animation");
            cart.classList.remove("enable-cart");
            cart.classList.remove("cart-enable-animation");
            cartIcon.classList.remove("disable-cart");
        }
    }

    return (
        <div className="cart-background disable-cart disable-cart-animation initial-class" onClick={toggleCart}>
            <div className="cart disable-cart initial-class">
                <div className="cart-top">
                    cart
                </div>
                <div className="cart-holder">
                    holder
                </div>
            </div>
        </div>
    )
}

export default Cart;