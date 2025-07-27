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
    <div className="min-h-screen px-4 py-20 backdrop-blur-md bg-white/10">
      <h2 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-md">
        Top Destinations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 min-h-[300px] flex flex-col justify-between"
          >
            <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
            <p className="text-white/80">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
