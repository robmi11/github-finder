import { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";

import UserItem from "./UserItem";
import Spinner from "../shared/Spinner";

function UserResults() {
  const { users, loading } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
        {users ? (
          users.map((user, index) => <UserItem key={index} user={user} />)
        ) : (
          <h1>Error</h1>
        )}
      </div>
    </div>
  );
}

export default UserResults;
