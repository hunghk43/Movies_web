import React from "react";

const MovieList = ({ title }) => {
  return (
    <div className="text-white text-xl font-bold p-8  mb-10 ">{title}</div>
  );
};
{
  /* MỤC TIÊU CỦA PROP LÀ :
    + truyền data từ components cha xuống components con , và components con show data đó ra 
    + không được thay đổi giá trị ở trong components con, muốn thay đổi thì dùng state
===> Component cha “drop” (thả) dữ liệu xuống cho con,
còn component con chỉ nhận và hiển thị, không được sửa trực tiếp.
+ React quy định props là read-only (chỉ đọc).
Vì nếu component con có thể tự thay đổi dữ liệu được truyền xuống, toàn bộ hệ thống dữ liệu React sẽ mất tính đồng nhất.
Nếu bạn muốn thay đổi dữ liệu,
bạn phải:
Dùng state (useState) trong component cha,

Rồi truyền hàm setState xuống để con “gọi ngược lên” thay đổi.
    */
}
export default MovieList;
