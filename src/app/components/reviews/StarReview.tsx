"use client";

import React from "react";

type Props = {
  value: number; // 1..5
  onChange?: (v: number) => void;
  size?: "sm" | "md";
};

export default function StarRating({ value, onChange, size = "md" }: Props) {
  const starSize = size === "sm" ? "text-lg" : "text-2xl";

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const n = i + 1;
        const filled = n <= value;

        const common =
          `${starSize} leading-none select-none ` +
          (filled ? "text-[#e7d882]" : "text-gray-300");

        if (!onChange) {
          return (
            <span key={n} className={common} aria-hidden="true">
              ★
            </span>
          );
        }

        return (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={common + " hover:scale-[1.05] transition"}
            aria-label={`Set rating to ${n} star${n > 1 ? "s" : ""}`}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
