import Download from "./Components/Download";
import Features from "./Components/Features";
import Homeintro from "./Components/Homeintro";
import Navbar from "./Components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Navbar />
        <Homeintro />
        <Features />
        <Download />
        <div className="h-96"></div>
      </BrowserRouter>
    </div>
  );
}

export default App;
