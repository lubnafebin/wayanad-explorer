const hiddenGems = [
  {
    name: "Thirunelli Temple",
    description:
      "An ancient temple hidden amidst forests and mountains, known as the 'Kashi of the South'.",
    image:
      "https://www.keralatourism.org/images/destination/large/thirunelli_temple_wayanad20131031105344_318_1.jpg",
  },
  {
    name: "Kanthanpara Waterfalls",
    description:
      "A small yet beautiful waterfall surrounded by lush greenery, perfect for a peaceful retreat.",
    image:
      "https://www.keralatourism.org/images/destination/mobile/kanthanpara_waterfalls_wayanad20131031105208_313_1.jpg",
  },
  {
    name: "Soochipara Falls",
    description:
      "Also called Sentinel Rock Waterfalls, this three-tiered waterfall is tucked away in a dense forest and is a great spot for trekking and rock climbing.",
    image:
      "https://www.keralatourism.org/images/destination/large/soochipara_waterfalls20131031105713_317_1.jpg",
  },
];
export const HiddenGems = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Hidden Gems of Wayanad
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {hiddenGems.map((spot, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg overflow-hidden bg-white hover:scale-105 transform transition duration-300"
          >
            <img
              src={spot.image}
              alt={spot.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{spot.name}</h2>
              <p className="text-gray-600">{spot.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
