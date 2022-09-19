// Packages imports
import { useDispatch, useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"

// Files imports
import { setCartIsOpen } from "../../store/cart/cart.action";
import { selectCartIsOpen, selectCartItems } from "../../store/cart/cart.selector";

// Custom components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

// Styled components
import { DropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.js";

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
    <DropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} /> )
        ) : (<EmptyMessage>Your cart is empty</EmptyMessage>)}      
      </CartItems>
      <Button onClick={checkoutHandler}>GO TO CHECKOUT</Button>
    </DropdownContainer>
  );
};

export default CartDropdown;
