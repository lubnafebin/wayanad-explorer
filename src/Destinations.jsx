const cards = [
  { title: "Chembra Peak", description: "Highest peak in Wayanad." ,image:"/assets/wayanad.jpg"},
  { title: "Edakkal Caves", description: "Ancient cave carvings." ,image:"assets/edakkal-caves.webp"},
  { title: "Banasura Sagar", description: "Largest earthen dam in India.",image:"assets/banasura-sagar-dam.avif" },
  {
    title: "Meenmutty Falls",
    description: "Beautiful multi-tiered waterfall.",
    image:"assets/meenmutty-water-falls.jpg"
  },
  { title: "Pookode Lake", description: "Largest earthen dam in India." ,image:"assets/pookodu.webp"},
  { title: "Kuruvadweep", description: "Largest earthen dam in India.",image:"assets/kuruvadweep.webp" },
  { title: "Lakkidi View Point", description: "Largest earthen dam in India." ,image:"assets/lakkidi.webp"},
];

export const Destination = () => {
  return (
    <div id="destinations" className="min-h-screen px-4 py-20 bg-transparent z-10">
      <h2 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-md">
        Top Destinations
      </h2>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-x-4 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="min-w-[350px] h-[350px] p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-lg hover:scale-105 transition-all duration-300 flex-shrink-0"
            > 
              <img
                src={card.image}
                alt={card.title}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-white/80 mb-3">{card.description}</p>
              <button className="mt-auto text-sm text-blue-200 hover:underline">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
