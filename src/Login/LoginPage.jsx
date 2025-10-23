import React from "react";
import Pattern from "../assests/Pattern.png";
import Logo from '../assests/Logo.jpg'
import CLogo from '../assests/Custom Icon.png'
import Sidebar from "../Dashboard/Sidebar";

const Login = () => {
  return (
    <>
    <div
      className="min-h-screen flex flex-col justify-between bg-[#f9fafb] relative overflow-hidden"
      style={{
        backgroundImage: `url(${Pattern})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      {/* Navbar */}
      <header className="w-full flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Opus Globals"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Register */}
        <div>
          {/* <p>Don't have an account?</p> */}
          <a
            href="#"

          >
            Don't have an account? <span className="text-blue-600 font-medium">Register</span>
          </a>
        </div>
      </header>

      {/* Login Card */}
      <main className="flex justify-center items-center flex-grow">
        <div className="bg-white shadow-md rounded-2xl w-[400px] max-w-[90%] p-8">
          <div className="flex flex-col items-center mb-6">
            <img src={CLogo} />
            <h2 className="text-2xl font-semibold mt-4">Login to your account</h2>
            <p className="text-gray-500 text-sm mt-1">
              Enter your details to login.
            </p>
          </div>


          <hr className="text-gray-300 mb-6" />


          <form className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="hello@alignui.com"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••••••"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <div className="flex justify-between items-center text-sm mt-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" className="accent-blue-600" /> Keep me
                  logged in
                </label>
                <a href="#" className="text-gray-700 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
            >
              Login
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-6 py-4 text-gray-500 text-sm">
        <p>© 2025 Opus Globals</p>
        <div className="flex items-center gap-1 cursor-pointer">
          🌐 <span>ENG ▾</span>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Login;
