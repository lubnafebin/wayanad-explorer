import { Link } from "react-router-dom";
import { DESTINATIONS } from "../data/destination.js";

export const Destination = () => {
  return (
    <div
      id="destinations"
      className="min-h-screen px-4 py-20 bg-transparent z-10"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-md">
        Top Destinations
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-x-4 px-4">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.slug}
              to={`/destination/${d.slug}`}
              className="max-w-[340px] min-w-[340px] h-[350px] p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            >
              <img
                src={d.images[0]}
                alt={d.title}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">{d.title}</h3>
              <p className="text-sm text-white/80 mb-3">{d.short}</p>
              <button className="mt-auto text-sm text-blue-200 hover:underline">
                Explore →
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
