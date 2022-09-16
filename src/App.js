import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

import NotFound from "./components/pages/404/NotFound";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main>
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
