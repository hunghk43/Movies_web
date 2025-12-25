import { useState, useEffect } from "react";
import Logo_FINAL from "../assets/logo_film_FINAL.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

function Header({ onSearch }) {
  const [textSearch, setSearch] = useState("");
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(textSearch);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [textSearch]);
  // -----------------------------------------

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[9999] p-3 bg-gradient-to-b from-black via-black/95 to-black/80 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50">
      <div className="flex items-center justify-between">
        {/* Logo & Navigation */}
        <div className="flex items-center space-x-10 ml-6">
          <a href="/">
            <img className="h-[88px]" src={Logo_FINAL} alt="Logo_Film-FINAL" />
          </a>

          <nav className="flex items-center space-x-8 font-bold">
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="/"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="/"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              className="text-white relative group transition-colors duration-300 hover:text-red-500"
              href="/"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          </nav>
        </div>

        {/* Search & User Auth */}
        <div className="flex items-center space-x-4 mr-6">
          {/* chỉ hiện tìm kiếm nếu mình đăng nhập */}
          {user?.email && (
            <>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="w-80 px-5 py-3 bg-white/10 backdrop-blur-md text-white rounded-full border-2 border-white/20 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 transition-all duration-300 shadow-inner"
                  value={textSearch}
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
            </>
          )}

          {/*  hiển thị nút User/Login */}
          {user?.email ? (
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300">
                <span className="text-white text-sm font-semibold">
                  {user.email}
                </span>
                <svg
                  className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/*menu */}
              <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md rounded-lg shadow-xl border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-white hover:bg-red-600 rounded-lg transition-colors duration-200 font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="text-white pr-4 font-bold hover:text-red-500 transition">
                  Sign In
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
