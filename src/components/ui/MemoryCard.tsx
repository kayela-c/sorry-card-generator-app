"use client";
import React from "react";
import { MemoryCardProps } from "@/types/Types";
import { decodeEntity } from "html-entities";

export default function MemoryCard({ handleClick, data }: MemoryCardProps) {
  const emojiEl = data.map((emoji: { htmlCode: string[]; name: string }) => (
    <li key={emoji.name}>
      <button
        className="btn size-full rounded-2xl p-4 text-4xl lg:text-6xl"
        onClick={handleClick}
      >
        {/* Access the first element of htmlCode array to decode */}
        {decodeEntity(emoji.htmlCode[0])}
        <span className="block text-xs capitalize text-gray-400">
          {emoji.name}
        </span>
      </button>
    </li>
  ));

  return <>{emojiEl}</>;
}
