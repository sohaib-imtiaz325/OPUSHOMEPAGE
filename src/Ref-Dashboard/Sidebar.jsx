import React, { useState } from "react";
import {
  LayoutDashboard,
  UsersRound,
  Shield,
  LogOut,
} from "lucide-react";

import Home from "../Ref-Dashboard/Home";
import ReferralAccounts from "../Ref-Dashboard/ReferalAccount";

// Simple reusable menu item
function Item({ icon: Icon, label, active, disabled, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "w-full text-left flex items-center gap-3 px-3 py-2 rounded-md text-sm transition",
        "outline-none focus-visible:ring-2 ring-offset-2 ring-sidebar-ring",
        "hover:bg-muted hover:text-foreground",
        active ? "bg-muted font-medium text-foreground" : "text-foreground",
        disabled ? "opacity-50 pointer-events-none text-muted-foreground" : "",
      ].join(" ")}
    >
      <Icon className="size-4 shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  );
}

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  // ✅ Switch between your two pages
  const renderContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "refAcc":
        return <ReferralAccounts />;
      default:
        return <div>Select an option from the sidebar.</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        role="navigation"
        aria-label="Primary"
        className="w-56 bg-card text-foreground border-r border-gray-200 p-3 flex flex-col gap-2"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-2 py-1">
          <div className="h-8 w-8 rounded-lg bg-black text-white text-background grid place-items-center text-xs font-semibold">
            RM
          </div>
          <div className="leading-tight">
            <div className="text-[13px] font-medium">Referral Manager</div>
            <div className="text-xs text-muted-foreground">
              Management System
            </div>
          </div>
        </div>
<hr/>
        <div className="h-px bg-border mx-2 my-1" />

        {/* Menu */}
        <nav className="flex flex-col gap-1">
          <Item
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeItem === "home"}
            onClick={() => setActiveItem("home")}
          />
          <Item
            icon={UsersRound}
            label="Referral Accounts"
            active={activeItem === "refAcc"}
            onClick={() => setActiveItem("refAcc")}
          />
          <Item icon={Shield} label="Security Center" disabled />
        </nav>

        <div className="h-px bg-border mx-2 my-2" />

        {/* Sign out */}
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-destructive hover:bg-muted/70 transition"
        >
          <LogOut className="size-4 shrink-0 text-red-500" />
          <span className="font-medium text-red-500">Sign Out</span>
        </button>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-4 overflow-auto">{renderContent()}</main>
    </div>
  );
};

export default Sidebar;
