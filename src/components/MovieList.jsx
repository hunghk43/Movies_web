import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";
import IconPlay from "../assets/play.png";
const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1536 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

const MovieList = ({ title, data }) => {
  {
    /*useState : dùng để thay đổi những giá trị hoặc handle thuộc tính trong reactjs dùng trong components */
  }
  const [trailerKey, setTrailerKey] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hoveredID, sethoveredID] = useState(null);
  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const movieKey = await fetch(url, options);
      const data = await movieKey.json();
      setTrailerKey(data.results[0].key);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.log("Error fetching movie trailer:", error);
    }
  };

  return (
    <div className="text-white text-xl font-bold p-8 mb-10   ">
      <h2>{title}</h2>
      <div onMouseLeave={() => sethoveredID(null)}>
        <Carousel responsive={responsive}>
          {/* Code phần danh sách các bộ phim */}
          {data?.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                handleTrailer(item.id);
              }}
              onMouseEnter={() => sethoveredID(item.id)}
              className={`
    relative w-full h-auto mt-10 px-4 cursor-pointer
    transition-all duration-300 ease-out
    ${hoveredID && hoveredID !== item.id ? "scale-90" : "scale-100"}
  `}
            >
              <div className="  cursor-pointer w-full h-full overflow-hidden group  ">
                {/*tạo background blur gradient
                 */}
                <div
                  className={`absolute inset-1 rounded-xl blur-lg opacity-0 transition-opacity duration-500 
 ${hoveredID === item.id ? "opacity-75" : ""}`}
                >
                  {" "}
                </div>
                {/*image (poster) + overlay gradient
                 */}
                <div className="absolute left-0 top-0 w-full h-[400px] overflow-hidden rounded-t-xl " />

                <img
                  src={
                    item.poster_path
                      ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                      : "./banner.webp"
                  }
                  alt={item.title}
                  className={`h-full w-full object-cover  transition-all duration-600 ${
                    hoveredID === item.id ? "scale-105 brightness-110" : ""
                  } ${
                    hoveredID && hoveredID !== item.id
                      ? "brightness-[0.3] saturate-0 blur-[5px]"
                      : ""
                  }`}
                />
              </div>
              {/* nút play */}
              {hoveredID === item.id && (
                <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-110 transition-transform duration-300">
                    <img src={IconPlay} alt="Play" />
                  </div>
                </div>
              )}

              {/* Số rate */}
              {hoveredID === item.id && item.vote_average && (
                <div className="absolute top-4 right-4  animate-fadeIn">
                  <div className="bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full border-2 border-yellow-400">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-green-500 font-bold">
                        {item.vote_average.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* tiêu đề  */}
              <div
                className={`relative bg-gradient-to-b from-black/80 to-gray-900 p-4 rounded-b-xl
                    transition-all duration-300
 ${
   hoveredID && hoveredID !== item.id ? "brightness-50 saturate-0 blur-sm" : ""
 }`}
              >
                {/* tiêu đề */}
                <p className="text-white text-base font-bold text-center leading-tight flex items-center justify-center">
                  <span className="relative inline-block text-xl">
                    {item.title || item.original_title}
                    {/* Animated Underline */}
                    <span
                      className={`
                          absolute left-0 -bottom-1 w-full h-[2px] 
                          bg-gradient-to-r from-red-500 via-pink-500 to-purple-500
                          transform origin-left transition-transform duration-500
                          shadow-[0_0_10px_rgba(239,68,68,0.8)]
                          ${hoveredID === item.id ? "scale-x-100" : "scale-x-0"}
                        `}
                    />
                  </span>
                </p>
                {/* thông tin phim */}
                {hoveredID === item.id && (
                  <div className="mt-3 text-center animate-fadeIn">
                    <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                      {item.original_language && (
                        <span className="px-2 py-1 bg-white/10 rounded-full">
                          {item.original_language.toUpperCase()}
                        </span>
                      )}
                      {item.release_date && (
                        <span className="px-2 py-1 bg-white/10 rounded-full">
                          {new Date(item.release_date).getFullYear()}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Carousel>{" "}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className=" 
             bg-black rounded-lg p-4 shadow-xl outline-none w-[700px] max-w-full   "
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm   z-[9999] flex justify-center items-center "
      >
        <div className="relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute right-0 left-auto  bg-red-600 text-white rounded-full 
                 px-3 py-1 text-sm hover:bg-white hover:text-red-700 transition all duration-500 ease-in "
          >
            ✕
          </button>
          <YouTube videoId={trailerKey} opts={opts} />
        </div>
      </Modal>
    </div>
  );
};

{
  /* 
  MỤC TIÊU CỦA PROP LÀ :
  + Truyền data từ component cha xuống component con, và component con hiển thị dữ liệu đó.
  + Không được thay đổi giá trị trong component con — muốn thay đổi thì dùng state ở cha.
  + Props là "read-only" (chỉ đọc).
  + Nếu muốn thay đổi dữ liệu: dùng useState trong cha và truyền hàm setState xuống cho con để con “gọi ngượ
*/
}
export default MovieList;
