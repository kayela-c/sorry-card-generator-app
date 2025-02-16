"use client";
import React from "react";
import { cardDeck } from "@/data/cards";
import { useGameStore } from "@/stores/gameStore";

const ResetBtn = () => {
  const { setClick, setDrawnCard, setDeck, buildDeck } = useGameStore();

  const resetDeck = () => {
    setClick(0);
    setDrawnCard(null);
    setDeck(buildDeck(cardDeck));
  };

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
