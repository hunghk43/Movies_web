import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

import IconPlay from "../assets/play.png";
const opts = {
  height: "390",
  width: "640",
  playerVars: { autoplay: 1 },
};

const MovieSearch = ({ title, data }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hoveredID, sethoveredID] = useState(null);

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      });

      const videoData = await res.json();
      if (videoData?.results?.length > 0) {
        setTrailerKey(videoData.results[0].key);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.log("Error fetching trailer:", error);
    }
  };

  return (
    <div className="text-white text-xl font-bold px-8 mb-10">
      <h2 className=" inline-block bg-gradient-to-r from-yellow-400  to-black/80 text-white px-3 py-2 rounded-full mt-8  animate-pulse ">
        {title}
      </h2>
      <div onMouseLeave={() => sethoveredID(null)}>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
          {data?.map((item) => (
            <div
              key={item.id}
              onClick={() => handleTrailer(item.id)}
              onMouseEnter={() => sethoveredID(item.id)}
              className="group relative w-full h-auto mt-10 px-4 cursor-pointer"
            >
              <div className="relative w-full h-auto rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out">
                {/* nền poster */}
                <div className=" absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-t from-black/60 to-transparent  opacity-0 group-hover:opacity-100 rounded-lg duration-300 ease-in"></div>
                {/* Poster phim */}
                <img
                  loading="lazy"
                  src={
                    item.poster_path
                      ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                      : "./banner.webp"
                  }
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />

                {hoveredID === item.id && (
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-4 animate-fadeIn">
                    {/* hiện rate */}
                    <div className="self-end">
                      <div className="bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400">
                        <div className="flex items-center gap-1">
                          <span className="text-yellow-400 text-sm">⭐</span>
                          <span className="text-green-500 font-bold ">
                            {item.vote_average > 0
                              ? item.vote_average.toFixed(1)
                              : "N/A"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* nút play */}
                    {hoveredID === item.id && (
                      <div className="absolute inset-0 flex items-center justify-center animate-fadeIn">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-110 transition-transform duration-300">
                          <img src={IconPlay} alt="Play" />
                        </div>
                      </div>
                    )}

                    <div className="self-center mt-auto">
                      <div className="flex items-center justify-center gap-2 text-[10px] font-medium text-white/90">
                        {item.original_language && (
                          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full shadow-sm">
                            {item.original_language.toUpperCase()}
                          </span>
                        )}
                        {item.release_date && (
                          <span className="px-2 py-0.5 bg-white/20 backdrop-blur-md rounded-full shadow-sm">
                            {new Date(item.release_date).getFullYear()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Phần Tiêu đề*/}
              <div className="group mt-3">
                <p className="text-white text-md font-bold text-center">
                  <span className="relative inline-block max-w-[180px]">
                    <span className="">
                      {item.title || item.original_title}
                    </span>

                    <span className="h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 absolute left-0 -bottom-1 w-full" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-black rounded-lg p-4 shadow-xl outline-none w-[700px] max-w-full"
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex justify-center items-center"
      >
        <div className="relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-red-700 transition-all duration-300 z-50"
          >
            ✕
          </button>
          <YouTube videoId={trailerKey} opts={opts} />
        </div>
      </Modal>
    </div>
  );
};

export default MovieSearch;
