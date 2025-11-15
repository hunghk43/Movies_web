import Logo from "../assets/Logo_Film.png";
function Header() {
  return (
    <div className=" p-3 bg-black flex items-center justify-between    ">
      <div className="flex items-center space-x-4 ">
        <img
          className="h-20 overflow-hidden  object-contain "
          src={Logo}
          alt="Logo_Film"
        />

        <nav className="  flex items-center space-x-4  font-bold ">
          {/* space : chỉ tạo ra khoảng cách các phần tử con, không tác động thẻ cha*/}
          <a className="text-white   " href="#">
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
