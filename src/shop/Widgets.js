import React from "react";
export default function Widgets(props) {
  console.log(props);
  const title = props.title;
  const items = props.items;
  console.log(items);
  return (
    <div className="product__container">
      <h3>{title}</h3>
      {items.map(item => {
        return (
          <div class="product__item">
            <a>
              <div>{item.name}</div>
              <div>
                <img src={item.image} width="100" />
              </div>
              <div>{item.detail}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
