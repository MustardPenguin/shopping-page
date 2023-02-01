import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Hooks/Homepage";
import Shoppingpage from "./Hooks/Shopping-page";
import React, { useEffect, useState } from "react";
import Navigation from "./Hooks/Navigation";
import Cart from "./Hooks/Cart";
import Items from "./Hooks/Items";
import ItemPage from "./Hooks/ItemPage";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <Cart />
                <Navigation />
                
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/shop" element={<Shoppingpage />} />
                    <Route path="/shop/:id" element={<ItemPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;