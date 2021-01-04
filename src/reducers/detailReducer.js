const initalState = { game: { platforms: [] }, screenshot: { results: [] } };

const detailReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
