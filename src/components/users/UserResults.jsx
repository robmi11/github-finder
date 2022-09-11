import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Spinner from "../shared/Spinner";

function UserResults() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      process.exit(1);
    }
  };

  if (isLoading) {
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
