import React, { useState } from "react";
import "../Styles/cart.css";

const Cart = () => {
    const [items, setItems] = useState({});
    
    const toggleCart = (event) => {
        if(event.target.classList.contains("cart")) { return; }

        const cartBackground = document.querySelector('.cart-background');
        const cartIcon = document.querySelector(".cart-icon");
        const cart = document.querySelector(".cart");
        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
        } else {
            cartBackground.classList.add("disable-cart");
            cart.classList.add("disable-cart");
            cart.classList.add("cart-disable-animation");
            cart.classList.remove("enable-cart");
            cart.classList.remove("cart-enable-animation");
            cartIcon.classList.remove("disable-cart");
            console.log(cart.getBoundingClientRect());
        }
    }

    return (
        <div className="cart-background disable-cart disable-cart-animation" onClick={toggleCart}>
            <div className="cart disable-cart"></div>
        </div>
    )
}

export default Cart;