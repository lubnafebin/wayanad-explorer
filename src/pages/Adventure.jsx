import React, { useRef } from "react";
import {
  FaMountain,
  FaTree,
  FaCampground,
  FaShip,
  FaCompass,
} from "react-icons/fa";
import { GiJeep } from "react-icons/gi";

const adventures = [
  {
    id: 1,
    title: "Trekking & Hiking",
    icon: <FaMountain size={40} className="text-blue-500" />,
    info: [
      "Chembra Peak – Heart-shaped Lake",
      "Banasura Hills – Panoramic views",
      "Best time: Oct – Mar",
      "Difficulty: Intermediate",
    ],
  },
  {
    id: 2,
    title: "Wildlife Safari",
    icon: <FaTree size={40} className="text-green-600" />,
    info: [
      "Muthanga Wildlife Sanctuary",
      "Tholpetty Forest Reserve",
      "Best time: Nov – May",
      "Difficulty: Easy",
    ],
  },
  {
    id: 3,
    title: "Camping",
    icon: <FaCampground size={40} className="text-orange-500" />,
    info: [
      "Forest & Riverside camps",
      "Night sky watching",
      "Best time: Year-round",
      "Difficulty: Beginner",
    ],
  },
  {
    id: 4,
    title: "Boating & Kayaking",
    icon: <FaShip size={40} className="text-sky-500" />,
    info: [
      "Pookode Lake",
      "Kuruva Island",
      "Best time: Oct – May",
      "Difficulty: Beginner",
    ],
  },
  {
    id: 5,
    title: "Ziplining",
    icon: <FaCompass size={40} className="text-purple-500" />,
    info: [
      "South India’s longest zipline",
      "Adrenaline-packed thrill",
      "Best time: Year-round",
      "Difficulty: Extreme",
    ],
  },
  {
    id: 6,
    title: "Off-road Jeep Rides",
    icon: <GiJeep size={40} className="text-red-500" />,
    info: [
      "Edakkal Caves trail",
      "Mud & rocky terrain",
      "Best time: Oct – Mar",
      "Difficulty: Intermediate",
    ],
  },
];

export const Adventure = () => {
  const adventureRef = useRef(null);

  const scrollToAdventures = () => {
    adventureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1179176550/photo/little-boy-ziplining-in-forest.webp?a=1&b=1&s=612x612&w=0&k=20&c=pNw9AdcbjBxCDeTxjSUuaWie26Um280cXudzgjKDdBA=')",
        }}
      >
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Adventure Awaits
          </h1>
          <p className="text-lg md:text-xl">
            Discover thrilling experiences in Wayanad
          </p>
          <button
            onClick={scrollToAdventures}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg"
          >
            Explore Adventures
          </button>
        </div>
      </section>

      {/* Adventure Activities */}
      <section ref={adventureRef} className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Popular Adventures
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {adventures.map((adv) => (
            <div
              key={adv.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-4">
                {adv.icon}
                <h3 className="text-xl font-semibold">{adv.title}</h3>
              </div>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                {adv.info.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
