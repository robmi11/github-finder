import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function NotFound() {
  return (
    <section className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-md text-5xl mb-8">404 &mdash; Page not found!</p>
          <Link to="/" className="btn btn-primary btn-long">
            <FaHome size={20} className="mr-3" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
