import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("User >>> : ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
