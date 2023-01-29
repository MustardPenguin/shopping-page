import "../Styles/navigation.css";
import cart from "../Images/cart1.png";

const navigation = () => {

    const toggleCart = () => {
        const cartBackground = document.querySelector('.cart-background');
        const cart = document.querySelector(".cart");
        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
        } else {
            cartBackground.classList.add("disable-cart");
            cart.classList.add("disable-cart");
        }
    }

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
                    <img src={cart} onClick={toggleCart} alt="cart"></img>
                    <div>1</div>
                </a>
            </div>
        </div>
    )
}

export default navigation;