import "../Styles/navigation.css";
import cart from "../Images/cart1.png";

const navigation = () => {
    return (
        <div className="navigation">
            <div>
                Shopping page
            </div>
            <div>
                <a href="/">
                    Home
                </a>
                <a href="/shop">
                    Shop
                </a>

                <a className="cart-icon">
                    <img src={cart} alt="cart"></img>
                    <div>1</div>
                </a>
            </div>
        </div>
    )
}

export default navigation;