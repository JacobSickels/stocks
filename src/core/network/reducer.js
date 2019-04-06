export default (state = {}, action) => {
  switch (action.type) {
    case "PING":
      return { ...state, test: true };
    default:
      return state;
  }
};
