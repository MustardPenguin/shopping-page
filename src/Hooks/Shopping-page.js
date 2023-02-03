import Items from "./Items";
import "../Styles/shop.css";
import uniqid from "uniqid";
import Images from "./Images";



const Shoppingpage = (props) => {
    const nums = props.nums;

    console.log(Images);
    return (
        <div className="shop">
            <div className="shop-holder">
                {Items.map( (item) => {
                    return (
                        <div key={uniqid()} className="shop-item">

                            <img src={
                                Images[item.id]
                            } alt={item.name}></img>
                            <div className="item-info">
                                <div>{item.name}</div>
                                <div>{item.price}</div>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Shoppingpage;