"use client"; // This directive indicates that the file is a client-side component in Next.js

import React from "react"; // Import React library
import { MemoryCardProps, Emoji } from "@/types/Types"; // Import the MemoryCardProps and Emoji types from the specified path
import { decodeEntity } from "html-entities"; // Import the decodeEntity function from the html-entities library
import EmojiButton from "./EmojiButton";

// Define the MemoryCard component, which takes props of type MemoryCardProps
export default function MemoryCard({
  handleClick,
  data,
  selectedCards,
  matchedCards,
}: MemoryCardProps) {
  // Map over the data array to create a list of emoji elements
  const emojiEl = data.map((emoji: Emoji, index: number) => {
    // Check if the card is selected
    const selectedCardEntry = selectedCards.find(
      (selectedCard) =>
        selectedCard.name === emoji.name && selectedCard.index === emoji.index,
    );

    // Check if the card is matched
    const matchedCardEntry = matchedCards.find(
      (matchedCard) =>
        matchedCard.name === emoji.name && matchedCard.index === emoji.index,
    );

    return (
      <li key={`${emoji.name}-${emoji.index}`}>
        <EmojiButton
          content={decodeEntity(emoji.htmlCode[0])}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
          handleClick={() => handleClick(emoji.name, emoji.index)}
        />
      </li>
    );
  });

  // Return the list of emoji elements
  return <>{emojiEl}</>;
}
