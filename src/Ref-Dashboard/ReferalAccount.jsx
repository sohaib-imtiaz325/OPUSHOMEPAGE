import React from "react";
import Sidebar from "../Ref-Dashboard/Sidebar";

const SectionHeading = ({ children }) => (
  <div className="mb-3">
    <h2 className="text-sm font-semibold text-gray-900">{children}</h2>
    <div className="h-px bg-gray-200 mt-3" />
  </div>
);

const Required = ({ children }) => (
  <span className="inline-flex items-center gap-1">
    {children}
    <span className="text-red-500">*</span>
  </span>
);

const ReferalAccount = () => {
  return (
    <div className="flex min-h-screen bg-grmay-50">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <h1 className="text-xl font-semibold mb-6 text-gray-900">Create Referral Account</h1>

        <form className="space-y-6 bg-white rounded-2xl shadow p-6">
          {/* Personal Information */}
          <SectionHeading>Personal Information</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                <Required>First Name</Required>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                <Required>Last Name</Required>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Location Information */}
          <SectionHeading>Location Information</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="country" className="text-sm font-medium text-gray-700">
                <Required>Country</Required>
              </label>
              <select
                id="country"
                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Select country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>Germany</option>
              </select>
            </div>
            <div className="space-y-1">
              <label htmlFor="city" className="text-sm font-medium text-gray-700">
                <Required>City</Required>
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter city name"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Identification & Contact */}
          <SectionHeading>Identification & Contact</SectionHeading>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-1">
              <label htmlFor="nid" className="text-sm font-medium text-gray-700">
                <Required>National ID / Passport</Required>
              </label>
              <input
                id="nid"
                type="text"
                placeholder="Enter National ID or Passport number"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">
                <Required>Phone Number</Required>
              </label>
              <div className="flex gap-2">
                <select className="w-40 border border-gray-300 rounded-md p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-400">
                  <option>+1 (US/Canada)</option>
                  <option>+44 (UK)</option>
                  <option>+49 (DE)</option>
                  <option>+91 (IN)</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="flex-1 border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Email Information */}
          <SectionHeading>Email Information</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                <Required>Email ID</Required>
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email2" className="text-sm font-medium text-gray-700">
                <Required>Confirm Email ID</Required>
              </label>
              <input
                id="email2"
                type="email"
                placeholder="Confirm email address"
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {/* Package Information */}
          <SectionHeading>Package Information</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="currency" className="text-sm font-medium text-gray-700">
                Currency
              </label>
              <input
                id="currency"
                type="text"
                value="USD"
                readOnly
                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-gray-100 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Currency is automatically set to USD</p>
            </div>
            <div className="space-y-1">
              <label htmlFor="package" className="text-sm font-medium text-gray-700">
                <Required>Package</Required>
              </label>
              <select
                id="package"
                className="w-full border border-gray-300 rounded-md p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <option>Select package tier</option>
                <option>Basic</option>
                <option>Pro</option>
                <option>Enterprise</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium hover:bg-gray-300"
            >
              Create Referral Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReferalAccount;