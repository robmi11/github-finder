import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

import Spinner from "../shared/Spinner";

function User() {
  const { login } = useParams();
  const { user_profile, getUserProfile, loading } = useContext(GithubContext);
  useEffect(() => {
    getUserProfile(login);
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="container mx-auto px-3 flex flex-col">
      User: {login}
      <Link to="/" className="btn btn-primary btn-long">
        <FaHome size={20} className="mr-3" />
        Back to home
      </Link>
    </div>
  );
}

export default User;
