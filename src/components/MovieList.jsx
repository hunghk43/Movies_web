import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5, // 👈 tăng từ 3 lên 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3, // 👈 tablet hiển thị 3 phim
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MovieList = ({ title, data }) => {
  return (
    <div className="text-white text-xl font-bold p-8 mb-10">
      <h2>{title}</h2>
      <Carousel responsive={responsive}>
        {/* Code phần danh sách các bộ phim */}
        {data?.map((item) => (
          <div key={item.id} className="relative w-72 h-96 mt-10 group">
            <div className="cursor-pointer w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105">
              {/* Lớp phủ đen mờ */}
              <div className="absolute left-0 top-0 w-full h-full bg-black/40" />

              {/* Ảnh */}
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              {/* Tên phim */}
              <div className="absolute left-9 bottom-7">
                <p className="uppercase text-md">
                  {item.title || item.original_title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
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
