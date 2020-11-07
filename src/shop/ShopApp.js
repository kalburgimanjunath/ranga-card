import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Widgets from "./Widgets";
import Category from "./Category";
import CarouselMain from "./Carousel";
export default function ShopApp() {
  const Products = {
    items: [
      {
        name: "hero Product",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        hero: "OMG This just came out today!",
        image: "http://placehold.it/940x300/999/CCC"
      },
      {
        name: "Product 1",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        info: "This is the latest and greatest product from Derp corp.",
        image: "http://placehold.it/300x300/999/CCC"
      },
      {
        name: "Product 2",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        offer: "BOGOF",
        image: "http://placehold.it/300x300/999/CCC"
      },
      {
        name: "Product 3",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        image: "http://placehold.it/300x300/999/CCC"
      },
      {
        name: "Product 4",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        offer: "No srsly GTFO",
        image: "http://placehold.it/300x300/999/CCC"
      },
      {
        name: "Product 5",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        image: "http://placehold.it/300x300/999/CCC"
      },
      {
        name: "Product 6",
        detail: "Lorem ipsum dolor sit amet",
        price: "99",
        info: "This is the latest and greatest product from Derp corp.",
        offer: "info with offer",
        image: "http://placehold.it/300x300/999/CCC"
      }
    ]
  };
  return (
    <div>
      <Header />
      <Category />
      <CarouselMain />
      <span>Hello manjunath welcome to the page</span>
      <Link to="/signout">SignOut</Link>
      <div className="product__main">
        <Widgets
          items={Products.items}
          title={"Great offers on Redme phones"}
        />
        <Widgets
          items={Products.items}
          title={"Brand Days | 29th -30 th Oct"}
        />
        <Widgets
          items={Products.items}
          title={"Gift from top smartphone brands"}
        />
        <Widgets
          items={Products.items}
          title={"Gift from top smartphone brands"}
        />
        <Widgets
          items={Products.items}
          title={"Festival treats | Home & kitchen "}
        />
      </div>
    </div>
  );
}
