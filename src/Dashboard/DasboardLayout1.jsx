import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Home1 from "../Dashboard/Home1";
import Users from "../Dashboard/Users";

const DashboardLayout1 = () => {
  const [activeItem, setActiveItem] = useState("overview"); // default page

  // 🔁 Render content based on active sidebar item
  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <Home1 />;
      case "users":
        return <Users />;
      default:
        return <div>Select a page from the sidebar.</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar activeKey={activeItem} onSelect={setActiveItem} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50 transition-all duration-300">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout1;
