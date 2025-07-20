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
        <nav className="fixed top-0 w-full bg-transparent text-white p-4 flex justify-between">
          <div className="font-bold text-xl">Wayanad</div>
          <ul className="flex gap-6">
            {["Home", "Destinations", "Experience", "About"].map((item, i) => (
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
            <button className="mt-6 px-4 py-1 rounded-full font-semibold text-lg shadow-lg border-white/30 bg-white/20 backdrop-filter backdrop-blur[10px]">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
