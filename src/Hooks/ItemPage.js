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

    const onChange = (a) => {
        console.log("Changed: " + a);
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
                    ${item.price}
                </div>
                <div>
                    {item.description}
                </div>
                <div className="quantity">
                    <div>-</div>
                    <input type="number" defaultValue={amount} onChange={onChange}></input>
                    <div>+</div>
                    
                </div>
                <div>
                    Add to cart
                </div>
                <div>
                    go back
                </div>
            </div>
            
        </div>
    )
}

export default ItemPage;