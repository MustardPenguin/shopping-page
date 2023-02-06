import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Hooks/Homepage";
import Shoppingpage from "./Hooks/Shopping-page";
import React, { useEffect, useState } from "react";
import Navigation from "./Hooks/Navigation";
import Cart from "./Hooks/Cart";
import ItemPage from "./Hooks/ItemPage";

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);

    const updateCart = (item) => {
        console.log("Update cart");
    }

    return (
        <BrowserRouter>
            <div>
                <Cart cart={cart} updateCart={updateCart}/>
                <Navigation />
                
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route exact path="/shop" element={<Shoppingpage />} />
                    <Route exact path="/shop/:id" element={<ItemPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;