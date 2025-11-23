import { useState } from "react";
import Logo_FINAL from "../assets/logo_film_FINAL.png";

function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] p-4 bg-gradient-to-b from-black via-black/95 to-black/80  backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-10 ml-6">
          <img
            className="h-20 rounded-md   "
            src={Logo_FINAL}
            alt="Logo_Film-FINAL"
          />

          <nav className="flex items-center space-x-8 font-bold">
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="#"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="#"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="#"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4 mr-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="w-80 px-5 py-3 bg-white/10 backdrop-blur-md text-white  rounded-full border-2 
border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-300 shadow-inner
               "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch(textSearch);
                }
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button
            className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-pink-600 text-white font-bold rounded-full shadow-lg shadow-red-500/50 hover:shadow-red-500/80 hover:scale-105 transition-all duration-300"
            type="button"
            onClick={() => onSearch(textSearch)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
