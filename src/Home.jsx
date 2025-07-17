import { useEffect, useRef } from "react";
export const Home = () => {
  const heroTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const opacity = Math.max(1 - scrollY / maxScroll, 0);
      if (heroTextRef.current) {
        heroTextRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        <div
          className="h-screen bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/assets/wayanad.jpg')" }}
        >
          <div
            ref={heroTextRef}
            className="h-screen flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-30"
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
      </div>
    </>
  );
};
