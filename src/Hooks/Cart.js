import React, { useState } from "react";
import "../Styles/cart.css";

const Cart = () => {
    const [items, setItems] = useState({});

    const toggleCart = (event) => {
        if(event.target.classList.contains("cart")) { return; }

        const cartBackground = document.querySelector('.cart-background');
        const cart = document.querySelector(".cart");
        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
        } else {
            cartBackground.classList.add("disable-cart");
            cart.classList.add("disable-cart");
        }
    }

    return (
        <div className="cart-background disable-cart" onClick={toggleCart}>
            <div className="cart disable-cart"></div>
        </div>
    )
}

export default Cart;