import { useState } from "react";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full bg-transparent text-white p-4 flex justify-between items-center z-10">
      <div className="font-bold text-xl">Wayanad</div>
      <div className="hidden sm:flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 w-[90%] max-w-md border border-white/30 shadow-md">
        <FiSearch className="text-white mr-2" size={20} />
        <input
          type="text"
          placeholder="Places to go,Things to do,..."
          className="bg-transparent outline-none text-white placeholder-white w-full"
        />
      </div>
      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-3">
        {["Destinations", "Discover", "Things to do"].map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full hover:bg-white/10 hover:backdrop-blur-md"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="sm:hidden" onClick={() => setOpen(!open)}>
        {open ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full backdrop-blur-md bg-white/5 border border-white/20 bg-opacity-80 text-white flex flex-col items-center gap-4 py-4 sm:hidden">
          {["Destinations", "Restaurants", "Hotel"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
