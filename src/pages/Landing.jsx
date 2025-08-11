import { Destination } from "../components/Destinations";
import { Navbar } from "../components/Navbar";
import { Home } from "./Home";
import { Stays } from "./Stays";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Destination />
      <Stays />
    </>
  );
};
