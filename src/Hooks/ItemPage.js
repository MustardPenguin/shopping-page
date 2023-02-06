import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Items from "./Items";
import Images from "./Images";
import "../Styles/itempage.css";

const ItemPage = () => {
    const [amount, setAmount] = useState(1);

    const getItem = (id) => Items.find( (item) => item.id === id );
    const { id } = useParams();
    const item = getItem(id);

    useEffect(() => {
        const quantity = document.querySelector('.quantity input');
        let amt = amount;
        if(amount === -1) {
            amt = "";
        }
        quantity.value = amt;
        console.log(amount);
    }, [amount])

    const onChange = () => {
        const quantity = document.querySelector('.quantity input');
        let value = quantity.value;
        console.log(value);
        console.log(value > 99);
        
        if(value < 1 && value !== "") {
            value = 1;
        } else if(value > 99) {
            value = 99;
        }

        if(value === "") {
            value = -1;
        }
        console.log(value);
        setAmount( parseInt(value) );
    }

    const arrowClick = (e) => {
        const target = e.target;
        
        if(target.getAttribute('value') === "+" && amount + 1 < 100) {
            setAmount(amount + 1);
        } else if(target.getAttribute('value') === "-" && amount - 1 > 0) {
            setAmount(amount - 1);
        }
    }

    const round = (num, places) => {
        places = Math.pow(10, places);
        return Math.floor(num * places) / places;
    }

    const addToCart = () => {
        console.log("Add to cart");
    }

    return (
        <div className="item-page">
            <div className="item-page-image">
                <img src={Images[id]} alt={item.name}></img>
            </div>
            <div className="item-page-info">
                <div>
                    {item.name}
                </div>
                <div>
                    ${round( item.price * (amount === -1 ? 1 : amount), 2 )}
                </div>
                <div>
                    {item.description}
                </div>
                <div className="quantity">
                    <div onClick={arrowClick} value="-">-</div>
                    <input type="number" defaultValue={amount} onChange={onChange}></input>
                    <div onClick={arrowClick} value="+">+</div>
                    
                </div>
                <button className="cart-button" onClick={addToCart}>
                    Add to cart
                </button>
                <a className="go-back" href="/shop">
                    Go back
                </a>
            </div>
            
        </div>
    )
}

export default ItemPage;