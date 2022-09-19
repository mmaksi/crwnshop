// Packages imports
import { useSelector } from "react-redux";

// Files imports
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import Authentication from "../authentication/authentication.component";
import { selectCurrentUser } from "../../store/user/user.selector";

// Styled components
import { Container, Header, HeaderBlock, Total } from "./checkout.styles.js";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const checkoutComponent = (
    <Container>
      <Header>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </Header>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      <PaymentForm />
    </Container>
  )

  return (
    currentUser ? checkoutComponent : <Authentication/>
  );
};

export default Checkout;
