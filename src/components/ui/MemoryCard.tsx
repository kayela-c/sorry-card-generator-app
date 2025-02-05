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
    <li key={index} className="card">
      <button className="btn" onClick={handleClick}>
        {emoji}
      </button>
    </li>
  ));

  return <ul className="card-container">{emojiEl}</ul>;
}
