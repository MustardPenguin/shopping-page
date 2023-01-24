import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Shoppingpage from "./Shopping-page";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/shop" element={<Shoppingpage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;