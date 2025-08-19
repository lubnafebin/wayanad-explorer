import {
  FaMountain,
  FaTree,
  FaCampground,
  FaShip,
  FaCompass,
} from "react-icons/fa";
const adventures = [
  {
    id: 1,
    title: "Trekking & Hiking",
    desc: "Climb Chembra Peak and Banasura Hills for breathtaking views.",
    icon: <FaMountain size={40} className="text-blue-500" />,
    difficulty: "Intermediate",
  },
  {
    id: 2,
    title: "Wildlife Safari",
    desc: "Explore Muthanga & Tholpetty forests with rich wildlife.",
    icon: <FaTree size={40} className="text-green-600" />,
    difficulty: "Easy",
  },
  {
    id: 3,
    title: "Camping",
    desc: "Spend a night under the stars in Wayanad forests.",
    icon: <FaCampground size={40} className="text-orange-500" />,
    difficulty: "Beginner",
  },
  {
    id: 4,
    title: "Boating & Kayaking",
    desc: "Paddle through Pookode Lake and Kuruva Island.",
    icon: <FaShip size={40} className="text-sky-500" />,
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Ziplining",
    desc: "Experience the thrill of South India’s longest zipline.",
    icon: <FaCompass size={40} className="text-purple-500" />,
    difficulty: "Extreme",
  },
  {
    id: 6,
    title: "Off-road Jeep Rides",
    desc: "Adventure through rugged terrains near Edakkal Caves.",
    icon: <FaCompass size={40} className="text-purple-500" />,
    difficulty: "Intermediate",
  },
];
export const Adventure = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1693878658414-42bed08fc192?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
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
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg">
            Explore Adventures
          </button>
        </div>
      </section>

      {/* Adventure Activities */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
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
              <p className="text-gray-600 mb-3">{adv.desc}</p>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100">
                Difficulty: {adv.difficulty}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Quick Adventure Info</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Best time to visit: October - May • Carry trekking shoes, raincoat &
          water bottles • Always hire certified local guides for trekking &
          safaris.
        </p>
        <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-lg">
          Plan Your Trip
        </button>
      </section>
    </div>
  );
};
