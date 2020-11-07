import React, { useContext } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { deleteProduct } from "./actions";
import { ProductContext } from "./ProductContext";
function ProductList({ dispatch }) {
  // const products = useSelector(state => state.products);
  // const productlist = [
  //   { id: 1, name: "abc" },
  //   { id: 2, name: "xyz" },
  //   { id: 3, name: "mnp" }
  const clickdispatched = useDispatch();
  const [products, setProducts] = useContext(ProductContext);
  // ];
  return (
    <div>
      <h1>Product List</h1>
      {products.map(item => {
        return <div>{item.name}</div>;
      })}
      <button
        onClick={e => {
          e.preventDefault();
          clickdispatched(deleteProduct());
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default ProductList;
