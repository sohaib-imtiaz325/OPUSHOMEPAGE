import React from "react";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";

const Navbar = ({ title, toggleSidebar, sidebarOpen }) => {
  return (
    <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3 bg-white shadocw-sm">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded hover:bg-gray-100 transition active:scale-95"
      >
        {sidebarOpen ? (
          <PanelLeftClose className="w-5 h-5 text-gray-700" />
        ) : (
          <PanelLeftOpen className="w-5 h-5 text-gray-700" />
        )}
      </button>
      <span className="font-medium text-gray-800">{title}</span>
    </div>
  );
};

export default Navbar;
