import UserResults from "../users/UserResults";
import UserSearch from "../users/UserSearch";

function Home() {
  return (
    <section className="container mx-auto px-3 pb-12">
      <UserSearch />
      <UserResults />
    </section>
  );
}

export default Home;
