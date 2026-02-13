import React from "react";
import MakerCard from "./MakerCard.jsx";

export default function MakerGrid({ makers }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {makers.map((m, i) => (
        <MakerCard key={m.slug} maker={m} index={i} />
      ))}
    </div>
  );
}
