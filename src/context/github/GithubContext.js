import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GITHUB_URL = "https://api.github.com";

const initialState = {};

const GithubContext = createContext(initialState);

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (searchText) => {
    setLoading();
    const params = new URLSearchParams({
      q: searchText,
    });

    try {
      const response = await fetch(
        `${GITHUB_URL}/search/users?q=${searchText}`,
        {
          headers: {
            Authorization: `token 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`,
          },
        }
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
  }; // GET SEARCH RESULTS

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
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
