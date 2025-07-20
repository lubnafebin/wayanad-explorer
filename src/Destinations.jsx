const cards = [
  { title: "Chembra Peak", description: "Highest peak in Wayanad." },
  { title: "Edakkal Caves", description: "Ancient cave carvings." },
  { title: "Banasura Sagar", description: "Largest earthen dam in India." },
  {
    title: "Meenmutty Falls",
    description: "Beautiful multi-tiered waterfall.",
  },
];

export const Destination = () => {
  return (
    <div id="destinations" className="relative z-30 -mt-10 px-6 pt-24 pb-20">
      <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-md">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/30 shadow-xl text-white hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
            <p className="text-white/90">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
