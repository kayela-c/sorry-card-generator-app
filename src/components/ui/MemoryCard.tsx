"use client"; // This directive indicates that the file is a client-side component in Next.js

import React from "react"; // Import React library
import { MemoryCardProps } from "@/types/Types"; // Import the MemoryCardProps type from the specified path
import { decodeEntity } from "html-entities"; // Import the decodeEntity function from the html-entities library

// Define the MemoryCard component, which takes props of type MemoryCardProps
export default function MemoryCard({ handleClick, data }: MemoryCardProps) {
  // Map over the data array to create a list of emoji elements
  const emojiEl = data.map((emoji: { htmlCode: string[]; name: string }) => (
    <li key={emoji.name}> {/* Use the emoji name as the key for each list item */}
      <button
        className="btn size-full rounded-2xl p-4 text-4xl lg:text-6xl" // Apply CSS classes for styling
        onClick={handleClick} // Attach the handleClick function to the button's onClick event
      >
        {/* Access the first element of htmlCode array to decode and display the emoji */}
        {decodeEntity(emoji.htmlCode[0])}
        <span className="block text-xs capitalize text-gray-400"> {/* Apply CSS classes for styling */}
          {emoji.name} {/* Display the name of the emoji */}
        </span>
      </button>
    </li>
  ));

  // Return the list of emoji elements
  return <>{emojiEl}</>;
}