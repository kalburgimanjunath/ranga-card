const news = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, { id: action.id, product: action.product }];
    default:
      return state;
  }
};
