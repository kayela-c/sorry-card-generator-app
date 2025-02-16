"use client";

import { Emoji, DeckArry, Card } from "@/types/Types";
import { create } from "zustand";
import { buildDeck } from "@/hooks/useDeck";
import { cardDeck } from "@/data/cards";

interface GameState {
  
  deck: DeckArry[];
  drawnCard: DeckArry;
  click: number;
  drawCard: () => void;
  setDeck: () => void;
  setDrawnCard: (card: Card) => void;
  setClick: () => void;
  buildDeck: () => void;
  resetDeck: () => void;

}

export const useGameStore = create<GameState>((set) => ({

  deck: [],
  drawnCard: { id: '', title: '', rule: '', probability: 0 },
  click: 0,
  drawCard: () => void,
  setDeck: () => void,
  setDrawnCard: (card) => set(),
  setClick: () => set((state) => ({ click: state.click + 1 })),
  buildDeck: () => void,
  resetDeck: () => void

}));


