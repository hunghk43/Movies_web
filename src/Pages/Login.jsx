import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import Login_bg from "../assets/login_bg.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Sai email hoặc mật khẩu. Vui lòng kiểm tra lại.");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={Login_bg}
        alt="/"
      />

      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className=" mt-12 max-w-[450px] h-[500px] mx-auto bg-black/75 text-white rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold text-center">Sign In</h1>

            {error && (
              <p className="p-3 bg-red-400 my-2 text-sm text-gray-800 rounded">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                type="password"
                placeholder="Password"
                autoComplete="current-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 transition duration-300">
                Sign In
              </button>

              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
              </div>

              <p className="py-8">
                <span className="text-gray-400">Not a member?</span>{" "}
                <Link
                  to="/signup"
                  className="text-white hover:underline font-bold"
                >
                  Sign up now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
