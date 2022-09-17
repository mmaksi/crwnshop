import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
import { setCartIsOpen } from "../../store/cart/cart.action";
import { selectCartIsOpen, selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const cartIsOpen = useSelector(selectCartIsOpen)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const checkoutHandler = () => {
    dispatch(setCartIsOpen(!cartIsOpen))
    navigate("/checkout");
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} /> )
        ) : (<span className="empty-message">Your cart is empty</span>)}      
      </div>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
