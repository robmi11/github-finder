const GithubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user_profile: action.payload.user_profile,
        user_repos: action.payload.user_repos,
        loading: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "CLEAR_USERS":
      return {
        users: [],
        user_profile: {},
        loading: false,
      };
    default:
      return state;
  }
};

export default GithubReducer;
