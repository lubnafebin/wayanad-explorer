const festivals = [
  {
    name: "Onam",
    description:
      "Kerala’s harvest festival with floral carpets, feasts (Onasadya), and dances.",
    location: "Across Wayanad",
    month: "August/September",
    image:
      "https://images.unsplash.com/photo-1569502958480-f55a56559483?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Thirunelli Temple Festival",
    description:
      "Annual festival with rituals and cultural performances at Thirunelli Mahavishnu Temple.",
    location: "Thirunelli Temple",
    month: "April",
    image:
      "https://images.unsplash.com/photo-1641666017729-f2d414711372?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Karthigai Festival at Thirunelli Temple",
    description:
      "A temple festival with traditional rituals, lamps, and cultural gatherings.",
    location: "Thirunelli Temple",
    month: "April",
    image:
      "https://images.unsplash.com/photo-1646200207062-d4881d60c3f1?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Thira / Theyyam",
    description:
      "Ritual art form with vibrant costumes, drum beats, and storytelling in temples.",
    location: "Various Temples",
    month: "Varies",
    image:
      "https://images.unsplash.com/photo-1660994116024-13d9c85238e9?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Valliyoorkavu Festival",
    description:
      "Tribal festival with folk arts, dances, and rituals at Valliyoorkavu Temple.",
    location: "Valliyoorkavu Temple",
    month: "March/April",
    image:
      "https://images.unsplash.com/photo-1728272356470-2ab981f766db?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const FestivalsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-60 flex items-center justify-center text-white bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577083753695-e010191bacb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGl3YWxpfGVufDB8fDB8fHww')",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold">Festivals of Wayanad</h1>
      </div>

      {/* Festivals Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {festivals.map((festival, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{festival.name}</h2>
              <p className="text-gray-600 text-sm mt-2">
                {festival.description}
              </p>
              <div className="mt-3 text-sm text-gray-500">
                📍 {festival.location} <br />
                🗓 {festival.month}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
