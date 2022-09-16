import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";
const GITHUB_URL = "https://api.github.com";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user_profile: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // GET SEARCH RESULTS
  const searchUsers = async (searchText) => {
    setLoading();

    try {
      const response = await fetch(
        `${GITHUB_URL}/search/users?q=${searchText}`
      );
      const { items } = await response.json();
      dispatch({
        type: "GET_USERS",
        payload: items,
      });
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };

  // GET USER PROFILE
  const getUserProfile = async (login) => {
    setLoading();
    try {
      const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
          Authorization: `token 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`,
        },
      });

      if (response.status === 404) {
        window.location = "/notfound";
      } else {
        const data = await response.json();
        dispatch({
          type: "GET_PROFILE",
          payload: data,
        });
      }
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };

  // SET LOADING
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  // CLEAR USERS
  const clearUsers = () => {
    dispatch({ type: "CLEAR_USERS" });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user_profile: state.user_profile,
        loading: state.loading,
        searchUsers,
        getUserProfile,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
