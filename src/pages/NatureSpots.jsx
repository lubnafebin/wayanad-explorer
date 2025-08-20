const spots = [
  {
    name: "Tholpetty Wildlife Sanctuary",
    desc: "A rich wildlife reserve where you can spot elephants, bison, deer, and enjoy jeep safaris.",
    img: "/assets/destinations/tholpetty.webp",
    align: "left",
    mapUrl:
      "https://www.google.com/maps/place/Tholpetty+Wildlife+Sanctuary/@11.9572,76.0458,15z",
  },
  {
    name: "Soochipara Waterfalls",
    desc: "A stunning three-tiered waterfall surrounded by dense forest. Ideal for trekking and rock climbing.",
    img: "/assets/destinations/soochipara.webp",
    align: "right",
    mapUrl:
      "https://www.google.com/maps/place/Soochipara+Waterfalls/@11.5276,76.1692,15z",
  },
  {
    name: "Neelimala Viewpoint",
    desc: "Famous for breathtaking valley views and waterfalls. A perfect spot for sunrise and sunset.",
    img: "/assets/destinations/neelimala.webp",
    align: "left",
    mapUrl:
      "https://www.google.com/maps/place/Neelimala+Viewpoint/@11.5702,76.2565,15z",
  },
  {
    name: "Muthanga Wildlife Sanctuary",
    desc: "Part of the Nilgiri Biosphere Reserve, home to elephants, tigers, and rare bird species.",
    img: "/assets/destinations/muthanga.webp",
    align: "right",
    mapUrl:
      "https://www.google.com/maps/place/Muthanga+Wildlife+Sanctuary/@11.6454,76.4272,15z",
  },
];

export const NatureSpots = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative text-white py-24 text-center bg-cover"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1673799490772-2ea0b711e43b?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold">
          Discover Nature Spots
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Explore Wayanad’s breathtaking landscapes, from waterfalls to wildlife
          sanctuaries.
        </p>
      </section>

      {/* Spots List */}
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-16">
        {spots.map((spot, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              spot.align === "right" ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <img
              src={spot.img}
              alt={spot.name}
              className="w-full md:w-1/2 h-72 object-cover rounded-xl shadow-lg"
            />

            {/* Text Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold">{spot.name}</h2>
              <p className="mt-4 text-gray-700">{spot.desc}</p>
              <a
                href={spot.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-green-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
