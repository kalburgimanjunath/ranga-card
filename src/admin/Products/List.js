import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: 1,
          title: "first product",
          description: "hello description",
          url: "",
          price: ""
        },
        {
          id: 2,
          title: "second product",
          description: "hello description",
          url: "",
          price: ""
        }
      ]
    };

    // this.initialState = () => {
    //   setState({
    //     product: [
    //       {
    //         id: 1,
    //         title: "first product",
    //         description: "hello description",
    //         url: "https://picsum.photos/id/237/200/300",
    //         price: ""
    //       },
    //       {
    //         id: 2,
    //         title: "first product",
    //         description: "hello description",
    //         url: "https://picsum.photos/id/237/200/300",
    //         price: ""
    //       }
    //     ]
    //   });
    // };
  }
  render() {
    // const products = [
    //   {
    //     id: 1,
    //     title: "first product",
    //     description: "hello description",
    //     url: "",
    //     price: ""
    //   }
    // ];
    console.log(this.state);
    return (
      <div>
        <h1>List of Products</h1>
        {this.state.product ? (
          this.state.product.map(item => {
            return (
              <div key={item.id.toString()}>
                <Link to={"product-detail/" + item.id}>
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                  <div>{item.url}</div>
                </Link>
              </div>
            );
          })
        ) : (
          <div>No products available</div>
        )}
      </div>
    );
  }
}
