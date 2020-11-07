import React from "react";
export default function Category() {
  const category = [
    "mobiles",
    "electronics",
    "home",
    "grocery",
    "fashion",
    "application",
    "our brands",
    "essentials",
    "devices",
    "prime",
    "food"
  ];
  return (
    <div className="category__main">
      {category.map(item => {
        return (
          <div className="category">
            <img src="http://placehold.it/940x300/999/CCC" width="100" />
            <div>{item}</div>
          </div>
        );
      })}
    </div>
  );
}
