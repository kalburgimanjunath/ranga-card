import { combineReducers } from "redux";
import addproduct from "./addproduct";
import counter from "./counter";
import product from "./product";
export default combineReducers({
  products: addproduct,
  counts: counter,
  product: product
});
