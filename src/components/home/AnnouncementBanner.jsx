import React from "react";

const defaultAnnouncements = [
  "Campus Chapter 2025–26 core team is live.",
  "Hack nights every Friday – bring your laptop.",
  "Tink-Her-Hack 4.0 Happening on 20,21 feb 2026.",
];

export default function AnnouncementBanner({ items = defaultAnnouncements }) {
  if (!items.length) return null;

  return (
    <div className="bg-thDark text-thLight text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto px-4 py-2 flex overflow-hidden">
        <div className="flex animate-[marquee_20s_linear_infinite] gap-10 whitespace-nowrap">
          {items.concat(items).map((item, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-thCyan" />
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}
