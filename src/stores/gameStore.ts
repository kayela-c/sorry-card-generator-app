import { Emoji } from "@/types/Types";
import { create } from "zustand";

interface GameState {
  selectedCards: Emoji[];
  matchedCards: Emoji[];
  setSelectedCards: (cards: Emoji[]) => void;
  setMatchedCards: (cards: Emoji[]) => void;
}

export const useGameStore = create<GameState>((set) => ({
  selectedCards: [],
  matchedCards: [],
  setSelectedCards: (cards) => set({ selectedCards: cards }),
  setMatchedCards: (cards) => set({ matchedCards: cards }),
}));
