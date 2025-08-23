const parks = [
  {
    name: "Karapuzha Adventure Park",
    description:
      "A scenic water adventure park near Karapuzha Dam with boating, zip-lining, and rope activities for families and adventure seekers.",
    image:
      "https://plus.unsplash.com/premium_photo-1695802467626-e7e781c8a6bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGFtdXNlbWVudCUyMHBhcmt8ZW58MHx8MHx8fDA%3D", // sample adventure park img
  },
  {
    name: "Karlad Lake Adventure Park",
    description:
      "Known for water sports like kayaking and zip-lining across the lake. A must-visit for thrill seekers.",
    image:
      "https://media.istockphoto.com/id/464837730/photo/woman-going-on-a-jungle-zipline-adventure.webp?a=1&b=1&s=612x612&w=0&k=20&c=CrmeoMqBH8WDQgNJUb8_IYatzCkXHzMTsL24texDOOo=",
  },
  {
    name: "Pookode Lake Park",
    description:
      "A peaceful eco-park with boating, freshwater aquarium, and children's play area surrounded by lush greenery.",
    image:
      "https://images.unsplash.com/photo-1623689103904-8688317a4a32?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9hdGluZyUyMGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export const ParksPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1674726763867-d417ed3b96da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGFtdXNlbWVudCUyMHBhcmt8ZW58MHx8MHx8fDA%3D')",
        }}
      >
        <div className="p-6 rounded-xl text-center">
          <h1 className="text-4xl font-bold mb-2">Amusement & Nature Parks</h1>
          <p className="text-lg">
            Discover thrilling adventure and fun spots in Wayanad
          </p>
        </div>
      </section>

      {/* Parks List */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-10">
        {parks.map((park, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={park.image}
              alt={park.name}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-3">{park.name}</h2>
              <p className="text-gray-700 mb-4">{park.description}</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-800 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                View Tickets
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
