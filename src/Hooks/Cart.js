import React, { useState } from "react";
import "../Styles/cart.css";
import uniqid from 'uniqid';
import Items from './Items';
import Images from './Images';
import lodash from 'lodash';
import items from "./Items";

const Cart = (props) => {
    const cart = props.cart;
    const setCart = props.setCart;
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

    const updateCart = (item, amount) => {
        let cartCopy = lodash.cloneDeep(cart);
        if(amount === "" || parseInt(amount) < 1) {
            cartCopy = cartCopy.filter( (cartItem) => cartItem.id !== item.id);
        } else {
            let cartItem = cartCopy.find( (itemCopy) => itemCopy.id === item.id);
            cartItem.amount = parseInt(amount);
        }
        
        setCart(cartCopy);
    }

    const onKey = (e, item) => {
        const currentVal = e.target.value;
        updateCart(item, currentVal);
    }

    const onIncrement = (e, item) => {
        const parentNode = e.target.parentNode;
        const childNodes = parentNode.childNodes;
        const input = childNodes[1];

        if(e.target.textContent === "+") {
            input.value = parseInt(input.value) + 1;
        } else {
            input.value = parseInt(input.value) - 1;
        }

        updateCart(item, input.value);
    }

    const getCartTotal = () => {
        let total = 0;
        cart.forEach( (item) => {
            total += getItem(item.id).price * item.amount;
            
        })
        return total;
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
                                            <div className="cart-quantity">
                                                <div onClick={(e) => onIncrement(e, item)}>-</div>
                                                <input type="number" defaultValue={item.amount} onKeyUp={(e) => onKey(e, item)}></input>
                                                <div onClick={(e) => onIncrement(e, item)}>+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        Total: {getCartTotal()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;