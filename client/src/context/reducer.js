const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ALBUMS":
      return {
        ...state,
        albums: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
