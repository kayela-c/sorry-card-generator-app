import { useState } from "react";
import { cardDeck } from "@/data/cards";
import { DeckArry } from "@/types/cardTypes";

// 1. Helper to build deck with probabilities
function buildDeck(cards: DeckArry[]): DeckArry[] {
  const expandedDeck: DeckArry[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.probability; i++) {
      expandedDeck.push({ ...card });
    }
  });
  return expandedDeck;
}

export const useDeck = () => {
  const [deck, setDeck] = useState<DeckArry[]>(() => buildDeck(cardDeck));
  const [drawnCard, setDrawnCard] = useState<DeckArry | null>(null);
  const [click, setClick] = useState<number>(0);

  const resetDeck = () => {
    setClick(0);
    setDrawnCard(null);
    setDeck(buildDeck(cardDeck));
  };

  const drawCard = () => {
    setClick((prev) => prev + 1);

    if (deck.length === 0) {
      setDeck(buildDeck(cardDeck));
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    setDrawnCard(card);

    const newDeck = [...deck];
    newDeck.splice(randomIndex, 1);
    setDeck(newDeck);
  };

  return { deck, drawnCard, click, resetDeck, drawCard };
};
