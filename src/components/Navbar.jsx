import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

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

            {/* Desktop Dropdown */}
            {item.dropdown && activeDropdown === item.name && (
              <ul className="absolute left-0 top-full bg-white/5 backdrop-blur-md border border-white/20 rounded-lg mt-2 shadow-lg w-48">
                {item.dropdown.map((sub, idx) => (
                  <li key={idx}>
                    <a
                      href={sub.link}
                      className="block px-4 py-2 hover:bg-white/10 transition"
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
        <div className="absolute top-14 left-0 w-full backdrop-blur-md bg-white/5 border border-white/20 bg-opacity-80 text-white flex flex-col gap-2 py-4 sm:hidden">
          {menuItems.map((item, i) => (
            <div key={i} className="w-full flex flex-col items-center">
              {!item.dropdown ? (
                <a
                  href={item.link}
                  className="px-4 py-2"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === item.name ? null : item.name
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-2"
                  >
                    {item.name}
                    <MdKeyboardArrowDown
                      className={`ml-1 transition-transform duration-200 ${
                        mobileDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === item.name && (
                    <div className="flex flex-col items-center gap-2 mt-1">
                      {item.dropdown.map((sub, j) => (
                        <a
                          key={j}
                          href={sub.link}
                          className="px-4 py-1 text-sm"
                          onClick={() => setOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};
