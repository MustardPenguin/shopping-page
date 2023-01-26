import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Hooks/Homepage";
import Shoppingpage from "./Hooks/Shopping-page";
import React, { useEffect, useState } from "react";
import Navigation from "./Hooks/Navigation";
import Cart from "./Hooks/Cart";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Cart />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/shop" element={<Shoppingpage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;