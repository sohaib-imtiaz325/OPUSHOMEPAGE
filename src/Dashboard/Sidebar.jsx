import React from "react";
import {
  BarChart2,
  Home,
  Users2,
  DollarSign,
  MessageSquare,
  History,
} from "lucide-react";

const defaultItems = [
  { key: "overview", label: "Dashboard Overview", icon: Home },
  { key: "users", label: "Users", icon: Users2 },
  { key: "finance", label: "Financial Management", icon: DollarSign },
  { key: "messages", label: "Message Center", icon: MessageSquare },
  { key: "history", label: "Account History", icon: History },
];

const Sidebar = ({ items = defaultItems, activeKey, onSelect, className = "" }) => {
  return (
    <aside
      className={`bg-gray-50 text-gray-900 border-r border-gray-200 w-64 shrink-0 h-screen sticky top-0 px-3 py-4 ${className}`}
      aria-label="Admin sidebar"
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <BarChart2 className="size-6" aria-hidden="true" />
        <span className="font-semibold">Admin Dashboard</span>
      </div>

      {/* Navigation */}
      <nav role="navigation" aria-label="Primary">
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = activeKey === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => onSelect(item.key)}
                  className={`w-full text-left group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    active
                      ? "bg-gray-100 text-gray-600 font-medium"
                      : "hover:bg-gray-100 font-normal"
                  }`}
                >
                  <Icon
                    className={`size-4 ${active ? "text-gray-900" : "text-gray-900"}`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
