// Packages imports
import { useSelector } from "react-redux";
import { Outlet, Link, useNavigate } from "react-router-dom";

// Files imports
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

// Styled components
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from "./navigation.styles.js";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartIsOpen = useSelector(selectCartIsOpen);
  
  const navigate = useNavigate()

  const signOutHandler = async () => {
    await signOutUser();
    navigate("/")
  }

  return (
    <>
      <NavigationContainer className="navigation">
        <LogoContainer>
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>
              SIGN IN
            </NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {cartIsOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
