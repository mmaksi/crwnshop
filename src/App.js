import { useEffect, lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux"

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUserAction } from "./store/user/user.action";
import Spinner from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.component"))
const Authentication = lazy(() => import ("./routes/authentication/authentication.component"))
const Checkout = lazy(() => import ("./routes/checkout/checkout.component"))
const Shop = lazy(() => import ("./routes/shop/shop.component"))
const Navigation = lazy(() => import ("./routes/navigation/navigation.component"))

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
  }, [dispatch])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={ <Navigation/> }>
          <Route index element={<Home/>} />
          <Route path="shop/*" element={ <Shop/> } />
          <Route path="auth" element={ <Authentication/> } />
          <Route path="checkout" element={ <Checkout/> } />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
