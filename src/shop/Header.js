import React from "react";
import Navbar from "./Navbar";
export default function Header() {
  const menus = [
    "home",
    "shop by category",
    "todays deals",
    "your orders",
    "buy again",
    "your wish list",
    "your account",
    "amazon pay",
    "try prime",
    "sell on amazon",
    "programs and features",
    "languages",
    "your notifications",
    "settings",
    "customer service"
  ];

  return (
    <div>
      <Navbar menu={menus} />
    </div>
  );
}
