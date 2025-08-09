import { Link } from "react-router-dom";
import { DESTINATIONS } from "../data/destination.js";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Destination = () => {
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

  return (
    <div
      id="destinations"
      className="relative min-h-screen px-4 py-20 bg-transparent z-10"
    >
      <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-10 drop-shadow-md">
        Top Destinations
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        {showLeft && (
          <button
            onClick={() => scroll(-340)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full z-20"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-x-4 px-4">
            {DESTINATIONS.map((d) => (
              <Link
                key={d.slug}
                to={`/destination/${d.slug}`}
                className="max-w-[280px] min-w-[280px] sm:max-w-[340px] sm:min-w-[340px] h-[300px] sm:h-[350px] p-4 sm:p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
              >
                <img
                  src={d.images[0]}
                  alt={d.title}
                  className="h-32 sm:h-40 w-full object-cover rounded-md mb-3"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{d.title}</h3>
                <p className="text-xs sm:text-sm text-white/80 mb-3">{d.short}</p>
                <button className="mt-auto text-xs sm:text-sm text-blue-200 hover:underline">
                  Explore →
                </button>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
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
