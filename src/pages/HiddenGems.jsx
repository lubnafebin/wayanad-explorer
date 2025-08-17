// const hiddenGems = [
//   {
//     name: "Thirunelli Temple",
//     description:
//       "An ancient temple hidden amidst forests and mountains, known as the 'Kashi of the South'.",
//     image:
//       "https://www.keralatourism.org/images/destination/large/thirunelli_temple_wayanad20131031105344_318_1.jpg",
//   },
//   {
//     name: "Kanthanpara Waterfalls",
//     description:
//       "A small yet beautiful waterfall surrounded by lush greenery, perfect for a peaceful retreat.",
//     image:
//       "https://www.keralatourism.org/images/destination/mobile/kanthanpara_waterfalls_wayanad20131031105208_313_1.jpg",
//   },
//   {
//     name: "Soochipara Falls",
//     description:
//       "Also called Sentinel Rock Waterfalls, this three-tiered waterfall is tucked away in a dense forest and is a great spot for trekking and rock climbing.",
//     image:
//       "https://www.keralatourism.org/images/destination/large/soochipara_waterfalls20131031105713_317_1.jpg",
//   },
// ];
export const HiddenGems = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">Hidden Gems of Wayanad</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">A Journey Off the Beaten Path</h2>
        <p className="text-lg text-gray-600">
          Beyond the famous spots, Wayanad hides treasures waiting to be explored. 
          Quiet waterfalls, secret caves, and untouched forests—perfect for curious travelers.
        </p>
      </section>

      {/* Explore Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            name: "Kanthanpara Waterfalls",
            img: "/assets/destinations/meenmutty-water-falls.jpg",
            desc: "A serene waterfall surrounded by tea estates and forests."
          },
          {
            name: "Thirunelli Temple",
            img: "/assets/destinations/thirunelli-temple.webp",
            desc: "An ancient temple in the Brahmagiri Hills with stunning views."
          },
          {
            name: "Kuruva Island",
            img: "https://images.unsplash.com/photo-1523224949444-170258978eef?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "A river island rich with unique flora and fauna."
          },
        ].map((place, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <img src={place.img} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{place.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Find Your Way</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.341798950965!2d76.13202431478452!3d11.685357992099024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60d274b68d8ef%3A0x84f9a5d67f76a7d2!2sWayanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1639577586194!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};
