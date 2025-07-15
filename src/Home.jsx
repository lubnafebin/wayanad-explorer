import { useEffect, useState } from "react";
export const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <nav className="fixed top-0 w-full z-50 bg-transparent text-white p-4 flex justify-between">
          <div className="font-bold text-xl">Wayanad</div>
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        <img
          src="/assets/ghibli_hill_front.png"
          alt=""
          className="absolute top-0 left-0 w-full h-[65%] object-cover z-10"
          style={{
            transform: `scale(${1 + scrollY * 0.0007})`,
            transformOrigin: "bottom center",
          }}
        />
        <img
          src="/assets/ghibli_hill.png"
          alt=""
          className="absolute bottom-0 left-0 w-full h-[35%] object-cover z-20"
        />
        <div
          className="absolute top-[40%] left-1/2 transform -translate-x-1/2 text-center text-white px-6 z-20 w-full max-w-4xl"
          style={{
            transform: `translate(-50%, ${-scrollY * 0.3}px)`,
            opacity: 1 - scrollY * 0.002,
          }}
        >
          <h1 className="font-bold text-5xl text-white ">
            Explore the beauty of Wayanad
          </h1>
          <p className="text-xl mt-5 font-serif text-white">
            discover nature,culture & calm in every every corner
          </p>
          <button className="mt-6 px-4 py-1 rounded-full bg-white text-green-900 font-semibold text-lg shadow-lg hover:bg-green-100 transition duration-300">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};
