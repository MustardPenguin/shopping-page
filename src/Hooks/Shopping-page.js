import { Link } from "react-router-dom";
import Items from "./Items";
import "../Styles/shop.css";
import uniqid from "uniqid";
import Images from "./Images";

const Shoppingpage = () => {

    return (
        <div className="shop">
            <div className="shop-holder">
                {Items.map( (item) => {
                    return (
                        <div key={uniqid()} className="shop-item">
                            <Link to={"/shop/" + item.id}>
                                <img src={
                                    Images[item.id]
                                } alt={item.name}
                                className="shop-item-image"
                                ></img>
                            </Link>
                            <div className="item-info">
                                <div>{item.name}</div>
                                <div>${item.price}</div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shoppingpage;