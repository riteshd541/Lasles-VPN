import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Main from "./components/MainBody/Main";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
