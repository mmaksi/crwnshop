import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { Outlet, Link, useNavigate } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectCartIsOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const cartIsOpen = useSelector(selectCartIsOpen);
  
  const navigate = useNavigate()

  const signOutHandler = () => {
    signOutUser();
    navigate("/")
  }

  return (
    <Fragment>
      <div className="navigation">
        <header className="logo-container">
          <Link to="/">
            <CrwnLogo className="logo" />
          </Link>
        </header>
        <nav className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to={"/auth"}>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </nav>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
