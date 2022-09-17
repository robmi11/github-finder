import axios from "axios";

const GITHUB_URL = "https://api.github.com";
const github = axios.create({
  baseURL: GITHUB_URL,
});

// GET SEARCH RESULTS
export const searchUsers = async (searchText) => {
  try {
    const response = await github.get(`/search/users?q=${searchText}`);
    return response.data.items;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

// GET USER PROFILE
// GET USER REPOS
export const getUser = async (login) => {
  const [user_profile, user_repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return {
    user_profile: user_profile.data,
    user_repos: user_repos.data,
  };
};
