import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";
import Signup_bg from "../assets/login_bg.jpg";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error.code);

      switch (error.code) {
        case "auth/email-already-in-use":
          alert("Email này đã được đăng ký rồi!");
          break;
        case "auth/invalid-email":
          alert("Email không hợp lệ!");
          break;
        case "auth/weak-password":
          alert("Mật khẩu phải có ít nhất 6 ký tự!");
          break;
        default:
          alert("Lỗi đăng ký: " + error.message);
      }
    }
  };
  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src={Signup_bg}
        alt="/"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>

      <div className="fixed w-full px-4 py-24 z-50">
        <div className="mt-12 max-w-[450px] h-[500px] mx-auto bg-black/75 text-white rounded-lg">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
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
                autoComplete="new-password"
              />
              <button className="bg-red-600 py-3 my-6 rounded font-bold hover:bg-red-700 transition duration-300">
                Sign Up
              </button>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember me
                </p>
              </div>
              <p className="py-8">
                <span className="text-gray-400">Already subscribed?</span>{" "}
                <Link
                  to="/login"
                  className="text-white hover:underline font-bold"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
