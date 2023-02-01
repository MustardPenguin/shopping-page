import Items from "./Items";
import "../Styles/shop.css";

const Shoppingpage = (props) => {
    const nums = props.nums;


    return (
        <div className="shop">
            <div className="shop-holder">
                {Items.map( (item) => {
                    return (
                        <div>{item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shoppingpage;