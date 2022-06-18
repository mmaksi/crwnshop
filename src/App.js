import { Fragment, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux"

import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component"
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";

import { setCurrentUserAction } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // stops the listener whenever component unmounts
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUserAction(user))
    })

    // runs whenever component unmounts
    return unsubscribe
  }, [])

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={ <Navigation/> }>
          <Route index element={<Home />} />
          <Route path="shop/*" element={ <Shop/> } />
          <Route path="auth" element={ <Authentication/> } />
          <Route path="checkout" element={<Checkout/>} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
