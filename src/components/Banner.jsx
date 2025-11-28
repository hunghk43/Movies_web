import React, { useEffect, useState } from "react";

import IconPlay from "../assets/play.png";
import Modal from "react-modal";
import YouTube from "react-youtube";

const opts = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

function Banner() {
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          },
        };

        const trendingRes = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
          options
        );
        const trendingData = await trendingRes.json();

        const randomMovie =
          trendingData.results[
            Math.floor(Math.random() * trendingData.results.length)
          ];
        const detailsRes = await fetch(
          `https://api.themoviedb.org/3/movie/${randomMovie.id}?language=en-US`,
          options
        );
        const detailsData = await detailsRes.json();

        setMovie({
          ...randomMovie,
          runtime: detailsData.runtime,
          // genres: detailsData.genres,
        });
      } catch (error) {
        console.log("Error fetching banner movie:", error);
      }
    };

    fetchTrendingMovie();
  }, []);

  const handleTrailer = async () => {
    if (!movie) return;

    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      if (data.results && data.results.length > 0) {
        setTrailerKey(data.results[0].key);
        setModalIsOpen(true);
      }
    } catch (error) {
      console.log("Error fetching trailer:", error);
    }
  };
  function handleTime(minute) {
    const hours = Math.floor(minute / 60);
    const second = minute % 60;
    return hours > 0 ? `${hours}h  ${second}m` : `${second}m`;
  }
  if (!movie) {
    return (
      <div className="w-full h-screen bg-black flex flex-col items-center justify-center">
        <div className="relative">
          <div className="text-8xl  animate-bounce">🍿</div>

          <div className="absolute -inset-4 border-4  border-red-700 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <p className="bg-gradient-to-r from-red-600 to-yellow-300 text-transparent bg-clip-text text-xl font-bold mt-8  animate-bounce">
          Ngồi ngay ngắn, phim sắp tới rồi đây.... !
        </p>
      </div>
    );
  }

  const backdropUrl = movie.backdrop_path
    ? `${import.meta.env.VITE_IMG_URL_BANNER}${movie.backdrop_path}`
    : "./banner.webp";

  const posterUrl = movie.poster_path
    ? `${import.meta.env.VITE_IMG_URL}${movie.poster_path}`
    : "./banner.webp";

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat  object-cover relative"
      style={{ backgroundImage: `url(${backdropUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80  to-transparent" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-transparent to-black/40" />

      <div className="mt-2 p-8 w-full h-full flex items-center justify-center space-x-8 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <div className="flex flex-col space-y-4">
            <h2 className="text-[50px] text-white font-bold">
              {movie.title || movie.original_title}
            </h2>

            <p className="text-white font-semibold text-lg line-clamp-6">
              {movie.overview || "No description available."}
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-gray-300   ">
                {new Date(movie.release_date).getFullYear()}
              </span>
              <span className="text-gray-300">
                {movie.original_language.toUpperCase()}
              </span>
              <div className="space-x-1">
                <span className="text-green-500 font-bold  ">
                  {movie.vote_average.toFixed(1)}
                </span>
                <span>
                  {Array(Math.round(movie.vote_average)).fill("⭐").join("")}
                </span>
              </div>
              <div className="text-gray-300 px-2 py-1  border-2   border-gray-300  ">
                {handleTime(movie.runtime)}
              </div>
              {/* <span className="text-gray-300">
                {movie.genres.map((g) => g.name).join(", ")}
              </span> */}
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={handleTrailer}
                className="text-white bg-gradient-to-r from-red-500 to-pink-500  font-bold p-3 rounded-full text-lg border-transparent hover:-translate-y-2 hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 ease-in"
              >
                Watch Trailer
              </button>
              <button className=" text-white font-bold px-4 py-4 bg-gradient-to-bl from-red-500 to bg-pink-500 rounded-full    hover:-translate-y-2 shadow-lg hover:shadow-red-500  transition-all duration-300 ease-in ">
                <a
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  More Details
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[450px] relative group cursor-pointer">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div
              onClick={handleTrailer}
              className="absolute h-full w-full left-0 top-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-3xl"
            >
              <img
                src={IconPlay}
                alt="Icon Play"
                className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center  shadow-[0_0_30px_rgba(239,68,68,0.8)] hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Trailer */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-black rounded-lg p-4 shadow-xl outline-none w-[700px] max-w-full"
        overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex justify-center items-center"
      >
        <div className="relative">
          <button
            onClick={() => setModalIsOpen(false)}
            className="absolute right-0 left-auto bg-red-600 text-white rounded-full px-3 py-1 text-sm hover:bg-white hover:text-red-700 transition all duration-500 ease-in"
          >
            ✕
          </button>
          <YouTube videoId={trailerKey} opts={opts} />
        </div>
      </Modal>
    </div>
  );
}

export default Banner;
