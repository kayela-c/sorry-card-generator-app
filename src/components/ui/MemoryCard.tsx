"use client"; // This directive indicates that the file is a client-side component in Next.js

import React from "react"; // Import React library
import { Data, CardClick } from "@/types/Types"; // Import the Data and CardClick types from the specified path
import { decodeEntity } from "html-entities"; // Import the decodeEntity function from the html-entities library
import EmojiButton from "./EmojiButton"; // Import the EmojiButton component
import { useGameStore } from "@/stores/gameStore"; // Import the useGameStore hook

// Define the MemoryCard component, which takes props of type MemoryCardProps
export default function MemoryCard({
  handleClick,
  data,
}: {
  handleClick: CardClick;
  data: Data;
}) {
  const { selectedCards, matchedCards } = useGameStore();
  // Map over the data array to create a list of emoji elements
  const emojiEl = data.map((emoji, index) => {
    // Check if the card is selected
    const selectedCardEntry = selectedCards.find(
      (emoji) => emoji.index === index,
    );
    const matchedCardEntry = matchedCards.find(
      (emoji) => emoji.index === index,
    );

    return (
      <li key={index}>
        <EmojiButton
          content={decodeEntity(emoji.htmlCode[0])}
          selectedCardEntry={selectedCardEntry}
          matchedCardEntry={matchedCardEntry}
          handleClick={() => handleClick(emoji.name, index)}
        />
      </li>
    );
  });

  // Return the list of emoji elements
  return <>{emojiEl}</>;
}
