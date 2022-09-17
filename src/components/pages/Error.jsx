import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="container mx-auto w-1/3">
      <div className="mb-4">
        <Link to="/" className="btn btn-ghost">
          Back To Search
        </Link>
      </div>
      <h2 className=" bg-slate-500 rounded-md p-10 text-white font-semibold">
        Github API bad response (API rate limit exeeded)...
        <br />
        Please wait a few minutes before making another request...
      </h2>
    </div>
  );
}

export default Error;
