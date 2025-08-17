import { Routes, Route, Router } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DestinationDetails } from "./pages/DestinationDetails";
import { HiddenGems } from "./pages/HiddenGems";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination/:slug" element={<DestinationDetails />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
      </Routes>
    </>
  );
}

export default App;
