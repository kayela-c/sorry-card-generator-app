"use client";
import React from "react";
import { useDeckStore } from "@/stores/deckStore";

const ResetBtn = () => {
  const { resetDeck } = useDeckStore();

  return (
    <button
      onClick={resetDeck}
      className="btn btn-primary text-primary-content"
    >
      Reset Deck
    </button>
  );
};

export default ResetBtn;