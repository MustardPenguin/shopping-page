import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Hooks/Homepage";
import Shoppingpage from "./Hooks/Shopping-page";
import React, { useEffect, useState } from "react";
import Navigation from "./Hooks/Navigation";
import Cart from "./Hooks/Cart";
import ItemPage from "./Hooks/ItemPage";
import lodash from "lodash";

const RouteSwitch = () => {
    const [cart, setCart] = useState([]);
    let cartCopy = lodash.cloneDeep(cart);

    const updateCart = (id, amount) => {
        if(amount === -1) { return; }
        console.log("Update cart with " + amount + " " + id);
        let findItem;
        for(let i = 0; i < cartCopy.length; i++) {
            let item = cartCopy[i];
            if(item.id === id) {
                findItem = item;
                break;
            }
        }

        if(findItem) {
            console.log("Add to count");
            findItem.amount += amount;
        } else {
            console.log("Create new");
            cartCopy[cartCopy.length] = {
                id: id, amount: amount
            }
        }

        setCart(cartCopy);
    }

    useEffect(() => {
        console.log(cart);
    }, [cart])

    return (
        <BrowserRouter>
            <div>
                <Cart cart={cart} setCart={setCart}/>
                <Navigation />
                
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route exact path="/shop" element={<Shoppingpage />} />
                    <Route exact path="/shop/:id" element={<ItemPage updateCart={updateCart} />}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;