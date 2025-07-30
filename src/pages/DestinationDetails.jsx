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
    <div className="min-h-screen p-6 md:p-10 text-white bg-black/40 backdrop-blur-sm">
      <button
        onClick={goBackToDestinations}
        className="mb-6 text-white/80 hover:text-white underline"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      {/* images */}
      <div className="flex gap-4 overflow-x-auto mb-6">
        {data.images?.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-80 h-52 object-cover rounded-xl flex-shrink-0"
          />
        ))}
      </div>

      <p className="mb-4">{data.long}</p>
      {data.ticket && (
        <p className="mb-2">
          <strong>Ticket:</strong> {data.ticket}
        </p>
      )}

      {data.mapUrl && (
        <a
          href={data.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View on Map
        </a>
      )}
    </div>
  );
};
