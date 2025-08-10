import { Destination } from "../components/Destinations";
import { Home } from "../Home";
import { Navbar } from "../components/Navbar";
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
