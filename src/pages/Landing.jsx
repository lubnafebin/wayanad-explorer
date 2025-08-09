import { About } from "./About";
import { Destination } from "../components/Destinations";
import { Home } from "../Home";
import { Navbar } from "../components/Navbar";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Destination />
      <About />
    </>
  );
};
