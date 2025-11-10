function Header() {
  return (
    <div className="p-8 bg-black flex items-center justify-between   ">
      <div className="flex items-center space-x-4 ">
        <h1 className="text-[30px] uppercase font-bold text-red-600 mr-10 ">
          HUNG.STUDIO_FILM
        </h1>
        <nav className="  flex items-center space-x-4">
          {/* space : chỉ tạo ra khoảng cách các phần tử con, không tác động thẻ cha*/}
          <a className="text-white" href="#">
            Home
          </a>
          <a className="text-white" href="#">
            About
          </a>
          <a className="text-white" href="#">
            Contact
          </a>
        </nav>
      </div>
      {/* Code phần bên phải ( container search và butotn*/}
      <div className="flex items-center space-x-6   ">
        <input
          type="text"
          placeholder="Search "
          className="p-4 text-white-300"
        />
        <button
          className=" p-2 bg-red-500 text-white rounded-md "
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
}
export default Header;
