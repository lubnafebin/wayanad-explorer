import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/Landing";
import { DestinationDetails } from "./pages/DestinationDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/destination/:slug" element={<DestinationDetails />} />
    </Routes>
  );
}

export default App;
