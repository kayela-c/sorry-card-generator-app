import { useState } from "react";
import { cardDeck } from "../data/cards";
import { buildDeck } from "../utils/deckHelpers";
//incomplete refactor
export const useDeck = () => {
  const [deck, setDeck] = useState(buildDeck(cardDeck));
  const [drawnCard, setDrawnCard] = useState(null);

  const drawCard = () => {
    if (deck.length === 0) {
      setDeck(buildDeck(cardDeck)); // Reset deck
    }
    const randomIndex = Math.floor(Math.random() * deck.length);
    const newCard = deck[randomIndex];
    setDeck(deck.filter((_, index) => index !== randomIndex));
    setDrawnCard(newCard);
  };

  return { deck, drawnCard, drawCard };
};
