import Contact from "./Components/Contact";
import Download from "./Components/Download";
import Faq from "./Components/Faq";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Homeintro from "./Components/Homeintro";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Homeintro />
        <Features />
        <Download />
        <Faq/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
