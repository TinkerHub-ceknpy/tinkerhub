import React from "react";
import { CONTACT_INFO } from "../data/contact.js";
import { TiltButton } from 'react-tilt-button';

export default function ContactPage() {
  const c = CONTACT_INFO;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Intro */}
      <section>
        <p className="text-xs tracking-[0.25em] uppercase text-gray-500 mb-2">
          Join the community
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
          Get into TinkerHub & CEKnpy
        </h1>
        <p className="text-sm text-gray-700 mb-2">
          TinkerHub works as a networked community: you join the foundation via
          the app, get vouched in by existing members, and plug into local
          campuses like CEKnpy for events and projects. [web:1][web:90]
        </p>
        <p className="text-sm text-gray-700">
          This page collects all the links you need to become an active maker in
          the CE Karunagappally community.
        </p>
      </section>

      {/* Step-by-step join flow */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-2">1. Join TinkerHub</h2>
          <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
            <li>
              Install the TinkerHub app and sign in with your email or phone. [web:90]
            </li>
            <li>
              Complete your profile so other makers can see what you&apos;re
              learning and building.
            </li>
            <li>
              Ask an existing TinkerHub member to vouch for you in the app. A
              vouch confirms you&apos;re a real community member and unlocks
              more spaces and opportunities. [web:1]
            </li>
          </ol>
          <a
            href={c.appLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-thCyan text-thDark text-xs font-medium px-4 py-2 mt-3 hover:bg-cyan-300 transition"
          >
            Open TinkerHub app
          </a>
        </div>

        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-2">2. Join CEKnpy spaces</h2>
          <p className="text-sm text-gray-700 mb-2">
            Once you&apos;re on the app, join the CEKnpy channels where events,
            cohorts, and calls for projects are announced.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {c.communitySpaceLink && (
              <li>
                Community space:{" "}
                <a
                  href={c.communitySpaceLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-thPurple hover:underline"
                >
                  chat link
                </a>
              </li>
            )}
            <li>
              Official campus page:{" "}
              <a
                href={c.campusPage}
                target="_blank"
                rel="noreferrer"
                className="text-thPurple hover:underline"
              >
                tinkerhub.org/campus/2607
              </a>{" "}
              – shows stats, events, and projects for CEKnpy. [web:12]
            </li>
          </ul>
        </div>
      </section>

      {/* Tinker Space + visiting */}
      <section className="rounded-2xl bg-white/80 border border-gray-100 p-4">
        <h2 className="text-lg font-semibold mb-2">Visit Tinker spaces</h2>
        <p className="text-sm text-gray-700 mb-2">
          TinkerHub also runs shared spaces like the Tinker Space in Kochi,
          where makers from different campuses come together for sprints,
          meetups, and experiments. Details and booking are shared through the
          foundation channels and the app. [web:1]
        </p>
        <p className="text-sm text-gray-700">
          Watch out for announcements in the app and CEKnpy groups when a visit
          or sprint is planned, and coordinate with the core team to travel as a
          group.
        </p>
      </section>

      {/* Contact + socials */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-2">Contact the core team</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            {c.email && (
              <li>
                Email:{" "}
                <a
                  href={`mailto:${c.email}`}
                  className="text-thPurple hover:underline"
                >
                  {c.email}
                </a>
              </li>
            )}
            <li>Campus: {c.campusAddress}</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white/80 border border-gray-100 p-4">
          <h2 className="text-lg font-semibold mb-2">Stay in the loop</h2>

          <div className="flex flex-wrap gap-4 justify-center mt-4">
            {/* Instagram Button */}
            {c.instagram && (
              <a href={c.instagram} target="_blank" rel="noreferrer">
                <TiltButton
                  variant="solid"
                  width={200}
                  height={60}
                  elevation={10}
                  pressInset={5}
                  tilt={4}
                  radius={16}
                  surfaceColor="#f669d3ff"
                >
                  <span className="font-semibold text-white">Instagram</span>
                </TiltButton>
              </a>
            )}

            {/* LinkedIn Button */}
            {c.linkedin && (
              <a href={c.linkedin} target="_blank" rel="noreferrer">
                <TiltButton
                  variant="solid"
                  width={200}
                  height={60}
                  elevation={10}
                  pressInset={5}
                  tilt={4}
                  radius={16}
                  surfaceColor="#3b82f6" // Light blue (Tailwind blue-500)
                >
                  <span className="font-semibold text-white">LinkedIn</span>
                </TiltButton>
              </a>
            )}

            {/* WhatsApp Button */}
            {c.communitySpaceLink && (
              <a href={c.communitySpaceLink} target="_blank" rel="noreferrer">
                <TiltButton
                  variant="solid"
                  width={200}
                  height={60}
                  elevation={10}
                  pressInset={5}
                  tilt={4}
                  radius={16}
                  surfaceColor="#22c55e" // Light green (Tailwind green-500)
                >
                  <span className="font-semibold text-white">WhatsApp</span>
                </TiltButton>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
