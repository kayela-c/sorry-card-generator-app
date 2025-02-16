import { cardDeck } from "@/data/cards";
import { DeckArry } from "@/types/Types";
import { useGameStore } from "@/stores/gameStore";

// 1. Helper to build deck with probabilities
export function buildDeck(cards: DeckArry[]): DeckArry[] {
  const expandedDeck: DeckArry[] = [];

  cards.forEach((card) => {
    for (let i = 0; i < card.probability; i++) {
      expandedDeck.push({ ...card });
    }
  });
  return expandedDeck;
}

export const useDeck = () => {
  const drawCard = () => {
    const deck = useGameStore((state) => state.deck);
    const setDeck = useGameStore((state) => state.setDeck as (deck: DeckArry[]) => void);
    const setDrawnCard = useGameStore((state) => state.setDrawnCard);

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

  return {
    drawCard,
    buildDeck,
  };
};
