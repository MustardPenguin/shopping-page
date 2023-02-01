import "../Styles/navigation.css";
import cart from "../Images/cart1.png";

const navigation = () => {

    const toggleCart = () => {
        const cartBackground = document.querySelector('.cart-background');
        const cartIcon = document.querySelector(".cart-icon");
        const cart = document.querySelector(".cart");

        console.log(cart.classList);

        if(cart.classList.contains("initial-class")) {
            cart.classList.remove("initial-class");
            cartBackground.classList.remove("initial-class");
        }

        if(cartBackground.classList.contains("disable-cart")) {
            cartBackground.classList.remove("disable-cart");
            cart.classList.remove("disable-cart");
            cart.classList.remove("cart-disable-animation");
            cart.classList.add("enable-cart");
            cart.classList.add("cart-enable-animation");
            cartIcon.classList.add("disable-cart");
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