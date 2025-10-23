import React, { useState } from "react";
import Pattern from "../assests/Pattern.png";
import Logo from '../assests/Logo.jpg'
import CLogo from '../assests/Custom Icon.png'

const CreatePassword = () => {
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const strengthChecks = {
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
        length: password.length >= 8,
    };

    return (
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
                <div className="flex items-center gap-2">
                    <img
                        src={Logo}
                        alt="Opus Globals"
                        className="h-10 w-auto object-contain"
                    />
                </div>
                <a href="#" >
                    Already have an account? <span className="text-blue-600 hover:underline text-sm font-medium">Login</span>
                </a>
            </header>

            {/* Main Card */}
            <main className="flex justify-center items-center flex-grow">
                <div className="bg-white shadow-md rounded-2xl w-[400px] max-w-[90%] p-8">
                    {/* Icon + Title */}
                    <div className="flex flex-col items-center mb-6">
                        <img src={CLogo} />
                        <h2 className="text-2xl font-semibold mt-4">Create new password</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Create a strong password
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5">
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                New Password*
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••••••"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Confirm New Password*
                            </label>
                            <input
                                type="password"
                                value={confirm}
                                onChange={(e) => setConfirm(e.target.value)}
                                placeholder="••••••••••••"
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Password strength divided into 3 parts */}
                        <div className="flex gap-1 mt-2">
                            <div
                                className={`h-[4px] flex-1 rounded ${strengthChecks.uppercase ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            ></div>
                            <div
                                className={`h-[4px] flex-1 rounded ${strengthChecks.number ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            ></div>
                            <div
                                className={`h-[4px] flex-1 rounded ${strengthChecks.length ? "bg-green-500" : "bg-gray-300"
                                    }`}
                            ></div>
                        </div>

                        {/* Password requirements */}
                        <div className="text-xs text-gray-500">
                            Weak password. Must contain at least:
                            <ul className="mt-1 space-y-1">
                                <li
                                    className={`${strengthChecks.uppercase
                                            ? "text-green-600"
                                            : "text-gray-500"
                                        }`}
                                >
                                    ✓ At least 1 uppercase
                                </li>
                                <li
                                    className={`${strengthChecks.number ? "text-green-600" : "text-gray-500"
                                        }`}
                                >
                                    ✓ At least 1 number
                                </li>
                                <li
                                    className={`${strengthChecks.length ? "text-green-600" : "text-gray-500"
                                        }`}
                                >
                                    ✓ At least 8 characters
                                </li>
                            </ul>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
                        >
                            Register
                        </button>

                        <p className="text-xs text-gray-500 text-center mt-3">
                            By clicking Register, you agree to accept Apex Financial’s{" "}
                            <a href="#" className="text-blue-600 font-medium hover:underline">
                                Terms and Conditions
                            </a>
                        </p>
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
    );
};

export default CreatePassword;
