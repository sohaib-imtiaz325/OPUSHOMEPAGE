import React, { useState } from "react";
import Sidebar from "../Dashboard/Sidebar"; // ✅ Correct import

export default function Users() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    nid: "",
    phoneCode: "",
    phoneNumber: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
    currency: "USD",
    package: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User created:", formData);
  };

  return (
    <div className="flex min-h-screen bg-jgray-100">
      {/* ✅ Main Content */}
      <main className="flex-1 overflow-auto">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2 ms-h9">Users Management</h1>
          <p className="ms- text-gray-600 mb-8">Manage all users in the referral system</p>
        <div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow rounded-2xl"
          >
            {/* First / Last Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                First Name
              </label>
              <input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Country / City */}
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <select
                value={formData.country}
                onChange={(e) => handleSelect("country", e.target.value)}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              >
                <option value="">Select country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="de">Germany</option>
                <option value="in">India</option>
                <option value="br">Brazil</option>
              </select>
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                City
              </label>
              <input
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* National ID */}
            <div className="md:col-span-2">
              <label htmlFor="nid" className="block text-sm font-medium mb-1">
                National ID
              </label>
              <input
                id="nid"
                value={formData.nid}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              />
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex gap-2">
                <select
                  value={formData.phoneCode}
                  onChange={(e) => handleSelect("phoneCode", e.target.value)}
                  className="w-28  rounded-md px-2 py-2 bg-gray-100"
                >
                  <option value="">Code</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+49">+49</option>
                  <option value="+91">+91</option>
                  <option value="+55">+55</option>
                </select>
                <input
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="flex-1  rounded-md px-3 py-2  bg-gray-100"
                  placeholder="Phone number"
                />
              </div>
            </div>

            {/* Email / Confirm Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email ID
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2  bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email2" className="block text-sm font-medium mb-1">
                Confirm Email ID
              </label>
              <input
                id="email2"
                type="email"
                value={formData.email2}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2  bg-gray-100"
              />
            </div>

            {/* Password / Confirm Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2  bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="password2" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <input
                id="password2"
                type="password"
                value={formData.password2}
                onChange={handleChange}
                className="w-full  rounded-md px-3 py-2  bg-gray-100"
              />
            </div>

            {/* Currency / Package */}
            <div>
              <label htmlFor="currency" className="block text-sm font-medium mb-1">
                Currency
              </label>
              <input
                id="currency"
                value={formData.currency}
                readOnly
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              />
              <p className="text-[11px] text-gray-500 mt-1">Auto-selected: USD</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Package</label>
              <select
                value={formData.package}
                onChange={(e) => handleSelect("package", e.target.value)}
                className="w-full  rounded-md px-3 py-2 bg-gray-100"
              >
                <option value="">Select package</option>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="enterprise">Enterprise</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="md:col-span-2 flex gap-3 pt-2">
              <button
                type="submit"
                className="bg-black text-white px-5 py-2 rounded-md hover:bg-black"
              >
                Create User
              </button>
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    firstName: "",
                    lastName: "",
                    country: "",
                    city: "",
                    nid: "",
                    phoneCode: "",
                    phoneNumber: "",
                    email: "",
                    email2: "",
                    password: "",
                    password2: "",
                    currency: "USD",
                    package: "",
                  })
                }
                className="bg-gray-200 px-5 py-2 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
