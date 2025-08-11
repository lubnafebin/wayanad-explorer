import { useEffect, useRef, useState } from "react";
import { STAYS } from "../data/stays";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export const Stays = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Hotel", "Resort", "Villa", "Homestay"];

  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 0);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    handleScroll(); // initialize
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el?.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredData =
    filter === "All"
      ? STAYS
      : STAYS.filter(
          (item) => item.type.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div className="min-h-screen p-6 md:p-10 text-white bg-transparent">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-center mt-10">
        What are you looking for?
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 p-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 w-fit mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-white transition-all duration-300 
          ${
            filter === cat
              ? "bg-white/20 border border-white/30 shadow-lg"
              : "hover:bg-white/10"
          }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      {/* Horizontal Scroll Cards */}
      <div className="relative">
        {showLeft && (
          <button
            onClick={() => scroll(-340)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
          >
            <FaChevronLeft />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-6 pb-4 scrollbar-hide">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="relative bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg flex-shrink-0 w-64"
              >
                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-black/60 px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow-md">
                  <FaStar className="text-yellow-400" />
                  <span>{item.rating}</span>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-lg h-40 w-full object-cover mb-4"
                />
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-white/70 text-sm">{item.location}</p>
                <p className="text-white mt-2">{item.price}</p>
                <button className="mt-4 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30 text-sm">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
        {showRight && (
          <button
            onClick={() => scroll(340)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
