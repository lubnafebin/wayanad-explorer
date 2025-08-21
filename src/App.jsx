import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DestinationDetails } from "./pages/DestinationDetails";
import { HiddenGems } from "./pages/HiddenGems";
import { Adventure } from "./pages/Adventure";
import { Navbar } from "./components/Navbar";
import { NatureSpots } from "./pages/NatureSpots";
import { FoodPage } from "./pages/FoodPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/destination/:slug" element={<DestinationDetails />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/nature-spots" element={<NatureSpots />} />
        <Route path="/food" element={<FoodPage />} />
        <Route path="/adventure" element={<Adventure />} />
      </Routes>
    </>
  );
}

export default App;
