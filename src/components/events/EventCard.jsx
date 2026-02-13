import React from "react";

export default function EventCard({ event }) {
  return (
    <div className={`rounded-2xl border border-gray-200 bg-white/80 p-4 hover:border-thPurple hover:shadow-md transition flex flex-col justify-between ${event.highlight ? "hover:bg-pink-100" : ""
      }`}>
      <div>
        <h3 className="text-sm font-semibold text-thDark">{event.title}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {event.date} • {event.mode}
          {event.location ? ` • ${event.location}` : ""}
        </p>
        {event.description && (
          <p className="text-sm text-gray-700 mt-2">{event.description}</p>
        )}
      </div>
      {event.link && (
        <a
          href={event.link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 text-xs text-thPurple hover:underline self-start"
        >
          View details
        </a>
      )}
    </div>
  );
}
