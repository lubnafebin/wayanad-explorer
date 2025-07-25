import { About } from "./About";
import { Destination } from "./Destinations";
import { Home } from "./Home";

function App() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('assets/wayanad.jpg')` }}
    >
      <Home />
      <Destination />
    </div>
  );
}

export default App;
