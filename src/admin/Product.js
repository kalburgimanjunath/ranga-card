import React from "react";
import { connect, useSelector, useDispatch, useContext } from "react-redux";
import { addProduct, increment, decrement } from "./actions";
import ProductList from "./ProductList";
import { ProductProvider } from "./ProductContext";
import List from "./Products/List";
import Header from "./Header";

function Product({ dispatch }) {
  const counter = useSelector(state => state.counts);
  const clickdispatched = useDispatch();

  let input;
  return (
    <div>
      <div>
        Counter:{counter}
        <button onClick={() => clickdispatched(increment(5))}>+</button>
        <button onClick={() => clickdispatched(decrement())}>-</button>
      </div>
      <h1>Products</h1>
      <div>Add Products</div>

      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(addProduct(input.value));
          input.value = "";
        }}
      >
        <div>
          <label>Product Name</label>
          <input type="text" ref={node => (input = node)} />
          <input type="submit" value="Add" />
        </div>
      </form>
      <ProductProvider>
        <Header />
        <List />
        <ProductList />
      </ProductProvider>
    </div>
  );
}

export default connect()(Product);
