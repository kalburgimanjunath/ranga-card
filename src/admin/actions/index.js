let nextproductId = 0;
export const addProduct = name => ({
  type: "ADD_PRODUCT",
  id: nextproductId++,
  name
});

export const deleteProduct = name => ({
  type: "DELETE_PRODUCT",
  name
});

export const increment = counter => ({
  type: "INCREMENT",
  counter
});

export const decrement = counter => ({
  type: "DECREMENT",
  counter
});
