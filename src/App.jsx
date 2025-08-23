import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DestinationDetails } from "./pages/DestinationDetails";
import { HiddenGems } from "./pages/HiddenGems";
import { Adventure } from "./pages/Adventure";
import { Navbar } from "./components/Navbar";
import { NatureSpots } from "./pages/NatureSpots";
import { FoodPage } from "./pages/FoodPage";
import { FestivalsPage } from "./pages/FestivalsPage";
import { ParksPage } from "./pages/ParksPage";

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
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/parks" element={<ParksPage />} />
      </Routes>
    </>
  );
}

export default App;
