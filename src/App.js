import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/main/Home";
import About from "./components/main/About";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
