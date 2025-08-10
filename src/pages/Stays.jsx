import React, { useState } from "react";

const sampleAccommodations = [
  {
    id: 1,
    name: "Sunset Paradise Hotel",
    type: "hotel",
    location: "Kalpetta, Wayanad",
    price: "₹4,500/night",
    image: "/assets/resort.jpg",
  },
  {
    id: 2,
    name: "Hilltop Resort",
    type: "resort",
    location: "Meppadi, Wayanad",
    price: "₹6,200/night",
    image: "/assets/resort.jpg",
  },
  {
    id: 3,
    name: "Green Valley Villa",
    type: "villa",
    location: "Vythiri, Wayanad",
    price: "₹7,800/night",
    image: "/assets/resort.jpg",
  },
];

export const Stays = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Hotel", "Resort", "Villa", "Homestay"];

  const filteredData =
    filter === "All"
      ? sampleAccommodations
      : sampleAccommodations.filter(
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="rounded-lg h-30 w-full object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-white/70">{item.location}</p>
            <p className="text-white mt-2">{item.price}</p>
            <button className="mt-4 px-4 py-2 bg-white/20 rounded-lg text-white hover:bg-white/30">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
