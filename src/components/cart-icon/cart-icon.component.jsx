import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setCartIsOpen } from '../../store/cart/cart.action';
import { selectCartCount, selectCartIsOpen } from '../../store/cart/cart.selector';
import "./cart-icon.styles.scss"

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)
  const cartIsOpen = useSelector(selectCartIsOpen)
  
  const toggleOpenCart = () => dispatch(setCartIsOpen(!cartIsOpen))

  return (
    <div className='cart-icon-container' onClick={toggleOpenCart}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
