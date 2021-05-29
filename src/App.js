import "./css/App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider.js";
import Orders from "./Orders";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(`user is >> ${authUser}`);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
