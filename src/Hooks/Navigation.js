import "../Styles/navigation.css";
import cart from "../Images/cart1.png";

const navigation = () => {
    return (
        <div className="navigation">
            <div>
                Shopping page
            </div>
            <div>
                <button>
                    Shop
                </button>

                <button className="cart-icon">
                   
                    <img src={cart} alt="cart"></img>
                    <div>1</div>
                </button>
            </div>
        </div>
    )
}

export default navigation;