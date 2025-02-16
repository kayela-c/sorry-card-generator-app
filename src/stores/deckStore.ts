import { create } from "zustand";
import { cardDeck } from "@/data/cards";
import { type DeckArry } from "@/types/Types";

function buildDeck(cards: DeckArry[]): DeckArry[] {
  const expandedDeck: DeckArry[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.probability; i++) {
      expandedDeck.push({ ...card });
    }
  });
  return expandedDeck;
}

interface DeckState {
  deck: DeckArry[];
  drawnCard: DeckArry | null;
  click: number;
  drawCard: () => void;
  resetDeck: () => void;
}

export const useDeckStore = create<DeckState>()((set) => ({
  deck: buildDeck(cardDeck),
  drawnCard: null,
  click: 0,
  drawCard: () => {
    set((state) => {
      if (state.deck.length === 0) {
        return {
          deck: buildDeck(cardDeck),
          click: state.click + 1,
          drawnCard: null,
        };
      }

      const randomIndex = Math.floor(Math.random() * state.deck.length);
      const card = state.deck[randomIndex];
      const newDeck = [...state.deck];
      newDeck.splice(randomIndex, 1);

      return {
        deck: newDeck,
        drawnCard: card,
        click: state.click + 1,
      };
    });
  },
  resetDeck: () => {
    set({
      deck: buildDeck(cardDeck),
      drawnCard: null,
      click: 0,
    });
  },
}));