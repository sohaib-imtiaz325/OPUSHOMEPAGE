import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  UsersRound,
  Shield,
  LogOut,
  X,
} from "lucide-react";

import Home from "../Ref-Dashboard/Home";
import ReferralAccounts from "../Ref-Dashboard/ReferalAccount";
import Navbar from "../Ref-Dashboard/Navbar"; // adjust path if needed

function Item({ icon: Icon, label, active, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "w-full text-left flex items-center gap-3 px-3 py-2 rounded-md text-sm transition",
        "hover:bg-gray-200 hover:text-gray-900",
        active ? "bg-gray-200 font-medium text-gray-900" : "text-gray-700",
        disabled ? "opacity-50 pointer-events-none text-gray-400" : "",
      ].join(" ")}
    >
      <Icon className="size-4 shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  );
}

export default function DashboardLayout() {
  const [activeItem, setActiveItem] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Detect screen size on mount & resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false); // mobile closed by default
      } else {
        setSidebarOpen(true); // desktop open by default
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "refAcc":
        return <ReferralAccounts />;
      default:
        return <div>Select a page from the sidebar.</div>;
    }
  };

  const getPageTitle = () => {
    switch (activeItem) {
      case "home":
        return "Dashboard";
      case "refAcc":
        return "Referral Accounts";
      case "security":
        return "Security Center";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="flex h-screen  relative overflow-hidden">
      {/* Sidebar + Overlay */}
      <div
        className={`bg-gray-50 fixed md:static top-0 left-0 h-full z-50 md:z-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          sidebarOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 md:opacity-100 md:translate-x-0"
        }`}
      >
        {/* Overlay (mobile only) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden animate-fadeIn z-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar panel */}
        {sidebarOpen && (
          <aside className="relative md:static w-56 h-full bg-gray-100 border-r border-gray-200 flex flex-col gap-2 shadow-lg md:shadow-none z-50 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] animate-slideInLeft">
            <div className="flex items-center justify-between p-3 gap-3 border-b border-gray-300 bg-white/50 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center text-xs font-semibold shadow-sm">
                  RM
                </div>
                <div className="leading-tight">
                  <div className="text-[13px] font-medium">Referral Manager</div>
                  <div className="text-xs text-gray-500">Management System</div>
                </div>
              </div>

              {/* Close button for mobile */}
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden p-1 rounded hover:bg-gray-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-2">
              <Item
                icon={LayoutDashboard}
                label="Dashboard"
                active={activeItem === "home"}
                onClick={() => {
                  setActiveItem("home");
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
              />
              <Item
                icon={UsersRound}
                label="Referral Accounts"
                active={activeItem === "refAcc"}
                onClick={() => {
                  setActiveItem("refAcc");
                  if (window.innerWidth < 768) setSidebarOpen(false);
                }}
              />
              <Item icon={Shield} label="Security Center" disabled />
            </nav>

            <div className="mt-auto p-2">
              <button
                type="button"
                className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 transition"
              >
                <LogOut className="size-4 shrink-0" />
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </aside>
        )}
      </div>

      {/* Main area */}
      <div className="flex-1 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
        <Navbar title={getPageTitle()} toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
