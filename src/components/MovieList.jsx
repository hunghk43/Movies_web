import React from "react";

const MovieList = ({ title, data }) => {
  return (
    <div className="text-white text-xl font-bold p-8 mb-10">
      <h2>{title}</h2>

      <div className="flex items-center space-x-4">
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
      </div>
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
