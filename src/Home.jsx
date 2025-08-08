import { useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";

export const Home = () => {
  const handleExplore = () => {
    document
      .getElementById("destinations")
      ?.scrollIntoView({ behavior: "smooth" });
  };
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
    <div id="home" className="relative w-full h-screen">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/assets/wayanad.jpg')" }}
      />
      <nav className="fixed top-0 w-full bg-transparent text-white p-4 flex justify-between z-10">
        <div className="font-bold text-xl">Wayanad</div>
        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-[90%] max-w-md border border-white/30 shadow-md">
          <FiSearch className="text-white mr-2" size={20} />
          <input
            type="text"
            placeholder="Places to go,Things to do,..."
            className="bg-transparent outline-none text-white placeholder-white w-full"
          />
        </div>
        <ul className="flex gap-4">
          {["Destinations", "Restaurants", "Hotel"].map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full transition duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-md"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
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
        <button
          id="explore-btn"
          onClick={handleExplore}
          className="mt-4 px-4 py-1 rounded-full font-semibold text-lg shadow-lg
                 border-white/30 bg-white/20 backdrop-blur[10px] cursor-pointer"
        >
          Explore
        </button>
      </div>
    </div>
  );
};
