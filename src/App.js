import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component"
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/signin/signin.component";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={ <Navigation/> }>
          <Route index element={<Home />}></Route>
          <Route path="shop" element={ <Shop/> } ></Route>
          <Route path="sign-in" element={ <Signin/> } ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
