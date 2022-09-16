const GITHUB_URL = "https://api.github.com";

// GET SEARCH RESULTS
export const searchUsers = async (searchText) => {
  try {
    const response = await fetch(`${GITHUB_URL}/search/users?q=${searchText}`, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const { items } = await response.json();
    return items;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

// GET USER PROFILE
export const getUserProfile = async (login) => {
  try {
    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token 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`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const profile = await response.json();
      return profile;
    }
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

// GET USER REPOS
export const getUserRepos = async (login) => {
  try {
    const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token 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`,
      },
    });
    const repos = await response.json();
    return repos;
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};