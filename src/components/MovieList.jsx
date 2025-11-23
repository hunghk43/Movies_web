import React from "react";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

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
    items: 6,
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
      <Carousel responsive={responsive}>
        {/* Code phần danh sách các bộ phim */}
        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              handleTrailer(item.id);
            }}
            className="relative w-full h-auto mt-10 group px-4   "
          >
            <div className="  cursor-pointer w-full h-full  ">
              <div className="absolute left-0 top-0 w-full h-full" />

              <img
                src={
                  item.poster_path
                    ? `${import.meta.env.VITE_IMG_URL}${item.poster_path}`
                    : "./banner.webp"
                }
                alt={item.title}
                className="h-full w-full object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="group ">
              <p className="text-white text-md mt-4 font-bold text-center  ">
                <span className="relative inline-block">
                  {item.title || item.original_title}
                  <span className="h-[2px] bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 absolute left-0 -bottom-0 w-full" />
                </span>
              </p>
            </div>
          </div>
        ))}
      </Carousel>
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
