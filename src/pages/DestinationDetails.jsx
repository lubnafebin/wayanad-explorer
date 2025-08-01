import { useParams, useNavigate } from "react-router-dom";
import { DESTINATIONS } from "../data/destination.js";

export const DestinationDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = DESTINATIONS.find((d) => d.slug === slug);

  if (!data) return <div className="p-8 text-white">Not found</div>;

  const goBackToDestinations = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("destinations")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  return (
    <div className="min-h-screen p-6 md:p-12 bg-gradient-to-br from-black via-gray-900 to-slate-800 text-white">
      {/* Back Button */}
      <button
        onClick={goBackToDestinations}
        className="mb-6 flex items-center text-white/70 hover:text-white transition duration-200"
      >
        <span className="mr-2 text-xl">←</span> Back to Destinations
      </button>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-xl tracking-wide">
        {data.title}
      </h1>

      {/* Image Gallery */}
      <div className="flex gap-4 overflow-x-auto mb-8 scrollbar-hide">
        {data.images?.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-80 h-52 object-cover rounded-xl flex-shrink-0 transition-transform duration-300 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          />
        ))}
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed text-white/90 mb-6">{data.long}</p>

      {/* Ticket Info */}
      {data.ticket && (
        <div className="mb-6 p-5 bg-white/5 border border-purple-500 rounded-lg shadow-lg max-w-md">
          <p className="text-white">
            🎟️{" "}
            <span className="font-semibold text-purple-300">Ticket Info:</span>{" "}
            {data.ticket}
          </p>
        </div>
      )}

      {/* Map Button */}
      {data.mapUrl && (
        <a
          href={data.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition rounded-lg shadow-lg text-white font-medium"
        >
          🗺️ View on Google Maps
        </a>
      )}
    </div>
  );
};
