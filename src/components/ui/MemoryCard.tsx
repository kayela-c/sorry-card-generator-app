import React from "react";
import { MemoryCardProps } from "@/types/cardTypes";

export default function MemoryCard({ handleClick }: MemoryCardProps) {
  const emojiArray = [
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
    "🐶",
    "🐷",
    "🐙",
    "🐛",
    "🐵",
  ];

  const emojiEl = emojiArray.map((emoji, index) => (
    <li key={index} className="">
      <button
        className="btn size-full rounded-2xl p-4 text-6xl"
        onClick={handleClick}
      >
        {emoji}
      </button>
    </li>
  ));

  return <ul className="grid grid-cols-5 gap-4">{emojiEl}</ul>;
}
