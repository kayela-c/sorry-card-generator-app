"use client";
import React from "react";
import { useDeck } from "@/hooks/useDeck";

const ResetBtn = () => {
  const { resetDeck } = useDeck();

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
