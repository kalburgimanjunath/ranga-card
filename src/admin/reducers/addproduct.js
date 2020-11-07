const addproduct = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ];
    case "DELETE_PRODUCT":
      return [state.splice(0, 1)];
    default:
      return state;
  }
};

export default addproduct;
