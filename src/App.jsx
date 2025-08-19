import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DestinationDetails } from "./pages/DestinationDetails";
import { HiddenGems } from "./pages/HiddenGems";
import { Adventure } from "./pages/Adventure";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination/:slug" element={<DestinationDetails />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </>
  );
}

export default App;
