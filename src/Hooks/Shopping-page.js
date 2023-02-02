import Items from "./Items";
import "../Styles/shop.css";
import uniqid from "uniqid";

const Shoppingpage = (props) => {
    const nums = props.nums;


    return (
        <div className="shop">
            <div className="shop-holder">
                {Items.map( (item) => {
                    return (
                        <div key={uniqid()} className="shop-item">{item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shoppingpage;