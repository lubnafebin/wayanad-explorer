import { useRef } from "react";

const foods = [
  {
    name: "🌾 Bamboo Rice (Moongil Arisi)",
    desc: "A rare tribal delicacy made from bamboo flower seeds, cooked into biryani or payasam.",
    img: "https://images.unsplash.com/photo-1709786204884-e65fb0598c14?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "🍗 Malabar Dum Biryani",
    desc: "Fragrant rice layered with spiced chicken or mutton, slow-cooked to perfection.",
    img: "https://images.unsplash.com/photo-1716550781939-beb7d7247aae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "🥥 Puttu & Kadala Curry",
    desc: "Steamed rice flour cylinders with grated coconut, paired with black chickpea curry.",
    img: "https://imgs.search.brave.com/RxFtcDJm6LyXLSVkkvpzDU21cIWDGMsBWv0tfM_Oi34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oZWFs/dGh5LXdoZWF0LXB1/dHR1LXNlcnZlZC12/ZWdhbi1kaWV0LW1l/YWwtaG9tZW1hZGUt/ZGVsaWNpb3VzLWJy/ZWFrZmFzdC13aG9s/ZS13aGVhdC1wdXR0/dS1zZXJ2ZWQtY2hp/Y2twZWFzLWN1cnJ5/LXN0ZWFtZWQtMjA4/Mjk0NjcyLmpwZw",
  },
  {
    name: "🥘 Appam with Stew",
    desc: "Soft hoppers made from rice batter and coconut milk, served with chicken or veg stew.",
    img: "https://media.istockphoto.com/id/701198310/photo/appam-palappam-with-mutton-stew-kerala-easter-breakfast.webp?a=1&b=1&s=612x612&w=0&k=20&c=xnixm_UGRTtqwIwWyMwEhBWDgPh1yb_IQPAN41dlq74=",
  },
];
const restaurants = [
  {
    name: "ClayHut Restaurant",
    description: "Famous for authentic Kerala meals and bamboo rice dishes.",
    image: "/assets/destinations/restaurants.webp",
  },
  {
    name: "1980's A Nostalgic Restaurant",
    description:
      "Retro-themed restaurant in Kalpetta serving Kerala & multi-cuisine dishes.",
    image: "/assets/destinations/1980.webp",
  },
  {
    name: "Jubilee Restaurant",
    description: "Well-known for delicious Malabar biriyani.",
    image: "/assets/destinations/jubilee.webp",
  },
];
export const FoodPage = () => {
  const restaurantRef = useRef(null);

  const scrollToRestaurants = () => {
    restaurantRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="px-6 py-16 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800">
          🍴 Food & Cuisine of Wayanad
        </h1>
        <p className="mt-4 text-gray-600">
          Wayanad’s food is a blend of tribal traditions and Malabar flavors.
          From bamboo rice to spicy biryanis, every dish is full of culture.
        </p>
      </section>

      {/* Food Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {foods.map((food, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={food.img}
              alt={food.name}
              className="md:w-1/2 h-60 object-cover"
            />
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold text-green-700">
                  {food.name}
                </h2>
                <p className="mt-2 text-gray-600">{food.desc}</p>
              </div>
              <button
                onClick={scrollToRestaurants}
                className="mt-4 w-fit bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Find Restaurants
              </button>
            </div>
          </div>
        ))}
      </div>
      <section ref={restaurantRef} className="py-20">
        <h2 className="text-4xl font-bold text-green-800 text-center mb-8">
          Top Restaurants
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {restaurants.map((rest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={rest.image}
                alt={rest.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{rest.name}</h3>
                <p className="text-gray-600 text-sm">{rest.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
