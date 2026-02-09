import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/events", label: "Events" },
  { to: "/projects", label: "Projects" },
  { to: "/top-makers", label: "Top Makers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkBase =
    "block px-3 py-2 text-sm rounded-full transition hover:text-thPurple";

  const mobileLinkBase = "block px-4 py-3 text-base transition-colors";

  return (
    <header className="w-full border-b border-gray-100 bg-white z-20 sticky top-0">
      <nav className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Logo Image */}
          <img
            src="/logo.png"
            alt="TinkerHub Logo"
            className="w-7 h-7 object-contain"
          />

          {/* Text */}
          <span className="font-semibold text-sm sm:text-base">
            TinkerHub CEKnpy
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-5 text-sm text-gray-600">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-thPurple font-medium bg-thLight" : ""
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-200 bg-white/60 text-thDark hover:border-thPurple transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative block w-4 h-3">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full rounded bg-thDark transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""
                }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[2px] w-full rounded bg-thDark transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"
                }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full rounded bg-thDark transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden bg-white border-t border-gray-100 transition-all duration-200 overflow-hidden ${open ? 'max-h-screen' : 'max-h-0'
          }`}
      >
        <div className="px-4 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-md transition-colors ${isActive ? 'text-thPurple font-medium' : ''
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
