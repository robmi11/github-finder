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

  const fetchUsers = async () => {
    setLoading();
    try {
      const response = await fetch(`${GITHUB_URL}/users`);
      const data = await response.json();
      dispatch({
        type: "GET_USERS",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  }; // ONLY FOR TESTING

  // SET LOADING
  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
