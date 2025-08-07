import { useParams, useNavigate } from "react-router-dom";
import { DESTINATIONS } from "../data/destination.js";
import { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const DestinationDetails = () => {
  const [isOpenNow, setIsOpenNow] = useState(false);

  const { slug } = useParams();
  const navigate = useNavigate();
  const data = DESTINATIONS.find((d) => d.slug === slug);

  useEffect(() => {
    if (data?.hours) {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      const [openHour, openMin] = data.hours.open.split(":").map(Number);
      const [closeHour, closeMin] = data.hours.close.split(":").map(Number);

      const nowInMinutes = currentHour * 60 + currentMinute;
      const openInMinutes = openHour * 60 + openMin;
      const closeInMinutes = closeHour * 60 + closeMin;

      setIsOpenNow(
        nowInMinutes >= openInMinutes && nowInMinutes <= closeInMinutes
      );
    }
  }, [data]);

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
    <div className="min-h-screen bg-white text-black px-6 md:px-20 py-8">
      {/* Back Button */}
      <button
        onClick={goBackToDestinations}
        className="mb-4 text-black/70 hover:text-black transition"
      >
        ← Back to Destinations
      </button>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <a
        href={data.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 underline mb-4"
      >
        <FaMapMarkerAlt className="w-5 h-5" />
        View on Map
      </a>
      {/* Image Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Left: Main Large Image */}
        <div className="md:col-span-2">
          <img
            src={data.images?.[0]}
            alt=""
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Right: Two Smaller Images in Column */}
        <div className="flex flex-col gap-4">
          <img
            src={data.images?.[1]}
            alt=""
            className="w-full h-[190px] object-cover rounded-xl shadow-md"
          />
          <img
            src={data.images?.[2]}
            alt=""
            className="w-full h-[190px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Content Layout Below Images */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: About Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-base leading-relaxed mb-6">{data.long}</p>
        </div>

        {/* Right: Info Boxes */}
        <div className="flex flex-col gap-4">
          {/* Explore Box */}
          <div className="border border-black p-4 rounded-md shadow-sm">
            <h3 className="text-lg font-bold mb-2">Ticket</h3>
            <p>{data.ticket}</p>
          </div>

          {/* Hours Box */}
          <div className="border border-black p-4 rounded-md mb-4">
            <h4 className="text-lg font-semibold">Hours</h4>
            <p>
              {data.hours.open} - {data.hours.close}
            </p>
            <p
              className={`text-sm font-medium ${
                isOpenNow ? "text-green-600" : "text-red-600"
              }`}
            >
              {isOpenNow ? "Open now" : "Closed now"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
