const cards = [
  { title: "Wayanad", description: "Explore the green paradise of Kerala." },
  { title: "Munnar", description: "Famous for its tea gardens and hills." },
  { title: "Alleppey", description: "Experience houseboats and backwaters." },
  { title: "Kochi", description: "A blend of modernity and tradition." },
];
export const Destination = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Top Destinations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition-all duration-300 p-6 hover:scale-105"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
