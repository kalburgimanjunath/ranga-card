import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";
export default function Header() {
  const value = useContext(ProductContext);

  return <div>Header Product Count:{value.length}</div>;
}
