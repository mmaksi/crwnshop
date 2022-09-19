// Packages imports
import { useDispatch, useSelector } from 'react-redux';

// Files imports
import { setCartIsOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';

// Styled components
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles.js"

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const cartIsOpen = useSelector(selectCartIsOpen)
  
  const toggleOpenCart = () => dispatch(setCartIsOpen(!cartIsOpen))

  return (
    <CartIconContainer onClick={toggleOpenCart}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
