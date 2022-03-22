import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart" className="shop"><i className="fa-solid fa-cart-shopping"></i></Link>
  )
}

export default CartWidget;