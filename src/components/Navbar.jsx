import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { name: "Home", link: "#home" },
    {
      name: "Discover",
      dropdown: [
        { name: "Top Destinations", link: "#top-destinations" },
        { name: "Hidden Gems", link: "#hidden-gems" },
        { name: "Nature Spots", link: "#nature-spots" },
      ],
    },
    {
      name: "Culture",
      dropdown: [
        { name: "Food & Cuisine", link: "#food" },
        { name: "Festivals", link: "#festivals" },
        { name: "Traditional Arts", link: "#arts" },
        { name: "History", link: "#history" },
      ],
    },
    {
      name: "Things to do",
      dropdown: [
        { name: "Adventure", link: "#adventure" },
        { name: "Parks & Nature", link: "#parks" },
        { name: "Heritage Walks", link: "#heritage" },
        { name: "Nightlife", link: "#nightlife" },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent text-white p-3 flex justify-between items-center z-10">
      {/* Logo */}
      <div className="font-bold text-xl">Wayanad</div>

      {/* Search Bar */}
      <div className="hidden sm:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-[90%] max-w-md border border-white/30 shadow-md">
        <FiSearch className="text-white mr-2" size={20} />
        <input
          type="text"
          placeholder="Places to go, Things to do..."
          className="bg-transparent outline-none text-white placeholder-white w-full"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-3 relative">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className="relative group"
            onMouseEnter={() => setActiveDropdown(item.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={item.link || "#"}
              className="px-4 py-2 rounded-full hover:bg-white/10 hover:backdrop-blur-md transition"
            >
              {item.name}
            </a>

            {/* Dropdown Menu */}
            {item.dropdown && activeDropdown === item.name && (
              <ul className="absolute left-0 top-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-2 shadow-lg w-48">
                {item.dropdown.map((sub, idx) => (
                  <li key={idx}>
                    <a
                      href={sub.link}
                      className="block px-4 py-2 hover:bg-white/20 transition"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full backdrop-blur-md bg-white/5 border border-white/20 text-white flex flex-col items-center gap-4 py-4 sm:hidden">
          {menuItems.map((item, i) => (
            <div key={i} className="w-full text-center">
              <a
                href={item.link || "#"}
                className="block px-4 py-2"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </a>
              {item.dropdown && (
                <div className="flex flex-col text-sm text-white/80">
                  {item.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href={sub.link}
                      className="px-4 py-1 hover:bg-white/10"
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
