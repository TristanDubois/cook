const stateInit = {
  users: [],
  errorMsg: "",
};

export const accountReducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: state.users.concat(action.payload.user),
        errorMsg: "",
      };
    case "CONNECTION_USER":
      return {};
    case "ADD_ERROR":
      return {
        ...state,
        errorMsg: action.payload.errorMsg,
      };
    default:
      return state;
  }
};
