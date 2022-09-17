function About() {
  return (
    <section className="container mx-auto px-3 pb-12 self-start">
      <div className="bg-slate-600 p-10 rounded-md w-1/2 mx-auto">
        <h2 className="text-4xl text-neutral-content">Github Finder App</h2>
        <p className="text-lg text-gray-400">
          Version <span className="text-white">1.0.0</span>
        </p>
        <p className="text-lg text-gray-400">
          Layout By:
          <a className="text-white" href="https://twitter.com/hassibmoddasser">
            {" "}
            Hassib Moddasser
          </a>
        </p>
        <p className="text-lg text-gray-400">
          Code By:
          <a
            className="text-white"
            href="https://github.com/robmi11/github-finder"
          >
            {" "}
            Robert Mizianty
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
