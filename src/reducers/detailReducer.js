const initalState = {
  game: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const detailReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };
    case "IS_LOADING":
      return { ...state, isLoading: true };
    default:
      return { ...state };
  }
};

export default detailReducer;
