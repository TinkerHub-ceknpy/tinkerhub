import React from "react";
import { ArrowRight } from "lucide-react";

const PAST_EVENTS_PREVIEW = [
  {
    title: "Tink-Her-Hack 2026",
    date: "20,21 feb 2026",
    mode: "offline",
    link: "https://tink-her-hack-4-ce-karunagappally.vercel.app?_vercel_share=DQUggOGnwkuye1ItWLocgODIVVt1E06n",
    locationLink: "https://www.google.com/maps/search/?api=1&query=College+of+Engineering+Karunagappally",
  },
  {
    title: "FutureForge – Awareness for Students & Parents",
    date: "19 Sep 2025",
    mode: "Online",
    link: "https://tinkerhub.org/events/8NTWABESNX/tinkerhub-campus-chapter-2025-26-selection-camp-thiruvananthapuram",
  },
];

function MiniEventCard({ event }) {
  return (
    <div className="group block rounded-xl border border-gray-200 bg-white/70 p-3 hover:border-thPurple hover:shadow-md transition text-left">
      <a href={event.link} target="_blank" rel="noreferrer" className="block">
        <h3 className="text-sm font-semibold text-thDark group-hover:text-thPurple">
          {event.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {event.date} • {event.mode}
        </p>
      </a>
      {event.locationLink && (
        <a
          href={event.locationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 text-thPurple font-bold flex items-center gap-2 hover:gap-4 transition-all text-xs w-fit"
          onClick={(e) => e.stopPropagation()}
        >
          Open in Google Maps <ArrowRight size={14} />
        </a>
      )}
    </div>
  );
}

export default function PastEventsPreview() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold">Recent events</h2>
        <a
          href="/events"
          className="text-xs text-thPurple hover:underline"
        >
          View all events
        </a>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {PAST_EVENTS_PREVIEW.map((e) => (
          <MiniEventCard key={e.title} event={e} />
        ))}
      </div>
    </section>
  );
}
