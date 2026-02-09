import React from "react";
import TeamGrid from "../components/team/TeamGrid.jsx";
import { CURRENT_TEAM, VOLUNTEERS } from "../data/team.js";

export default function TeamPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          Team
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Core team 2025–26
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          The core team keeps the learning spaces active, inclusive, and aligned
          with TinkerHub&apos;s campus structure, with clear roles for leading
          study jams, outreach, WIT, and first-year onboarding.
        </p>
        <p className="text-sm text-gray-700">
          Names and roles are synced with the official TinkerHub CEK campus
          page so that future teams can update it once and keep this site in
          sync.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Current core team</h2>
        <TeamGrid team={CURRENT_TEAM} />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Volunteers</h2>
        <TeamGrid team={VOLUNTEERS} />
      </section>

      <section className="rounded-2xl bg-white/80 border border-gray-100 p-4 text-sm text-gray-700">
        <h3 className="text-sm font-semibold mb-2">
          How this stays up to date
        </h3>
        <p>
          In the next iteration, this page will fetch the latest core team from
          the campus page at{" "}
          <a
            href="https://tinkerhub.org/campus/2607/"
            target="_blank"
            rel="noreferrer"
            className="text-thPurple hover:underline"
          >
            tinkerhub.org/campus/2607/
          </a>{" "}
          and map those roles into this layout, so each new batch only has to
          update details in one place.
        </p>
      </section>
    </div>
  );
}
