// Packages imports
import { useDispatch, useSelector } from "react-redux"

// Files imports
import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"

// Custom components
import Button from "../button/button.component"

// Styled components
import { Container, Footer, Name, Price } from "./product-card.styles.js"

const ProductCard = ( {product} ) => {
    const { name, price, imageUrl } = product
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const addToCartHandler = () => {
      dispatch(addItemToCart(cartItems, product))
    }

  return (
    <Container>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button onClick={addToCartHandler} buttonType="inverted">Add to card</Button>
    </Container>
  )
}

export default ProductCard
