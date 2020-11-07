import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Link to="/login">Login to Shipping Cart</Link>
      <br />
      <Link to="/admin">Login to Backend</Link>
    </div>
  );
}
