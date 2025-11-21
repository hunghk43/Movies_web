import React, { useState } from "react";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: { autoplay: 1 },
};

const MovieSearch = ({ title, data }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      <h2>{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mt-10">
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleTrailer(item.id)}
            className="group cursor-pointer"
          >
            {/* Poster */}
            <div className="relative w-full h-auto rounded-lg overflow-hidden ">
              <div className="absolute left-0 top-0 w-full h-full z-10 rounded-lg" />

              <img
                src={
                  item.poster_path
                    ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                    : "./banner.webp"
                }
                alt={item.title}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            <p className="text-md mt-4 font-bold text-center">
              <span className="relative inline-block">
                {item.title || item.name || item.original_title}
                <span className="h-[2px] bg-red-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 absolute left-0 -bottom-0 w-full" />
              </span>
            </p>
          </div>
        ))}
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
            className="absolute right-0 bg-red-600 text-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-red-700 transition-all duration-500"
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
