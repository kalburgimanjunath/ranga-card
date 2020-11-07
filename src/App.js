import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import ShopApp from "./shop/ShopApp";
import Product from "./admin/Product";
// import store from "./store";

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <ShopApp />
        </Route>
        <Route path="/signout">
          <Home />
        </Route>
        <Route path="/admin">
          <Product />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}
