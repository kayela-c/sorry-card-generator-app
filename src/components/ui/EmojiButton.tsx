import React from "react";
import { EmojiButtonProps } from "@/types/Types";

const EmojiButton: React.FC<EmojiButtonProps> = ({
  content,
  selectedCardEntry,
  matchedCardEntry,
  handleClick,
}) => {
  // Step 1: Create a new variable, "btnContent"
  const btnContent = selectedCardEntry || matchedCardEntry ? content : "?";

  return (
    <button
      className={`btn size-full rounded-2xl p-4 text-4xl lg:text-6xl ${
        selectedCardEntry ? "border-2 border-green-600" : ""
      } ${matchedCardEntry ? "border-2 border-green-600 bg-green-300" : ""}`} // Apply CSS classes for styling
      onClick={handleClick} // Attach the onClick function to the button's onClick event
    >
      {/* Step 2: Render "btnContent" as the content of the button */}
      {btnContent}
    </button>
  );
};

export default EmojiButton;
