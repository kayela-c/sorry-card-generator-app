"use client";
import clsx from "clsx";
import { useState } from "react";
import { cardDeck } from "@/data/cards"; // This is your original array
import Card from "./ui/Card";

type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

export type Click = number;

// 1. buildDeck helper
function buildDeck(cards: DeckArry[]): DeckArry[] {
  const expandedDeck: DeckArry[] = [];
  cards.forEach((card) => {
    for (let i = 0; i < card.probability; i++) {
      expandedDeck.push({ ...card });
    }
  });
  return expandedDeck;
}

const ExpCardDeck = () => {
  // 2. State for your deck and the current drawn card
  const [deck, setDeck] = useState<DeckArry[]>(() => buildDeck(cardDeck));
  const [drawnCard, setDrawnCard] = useState<DeckArry | null>(null);

  // Just a demo to track the number of clicks
  const [click, setClick] = useState<number>(0);

  // 3. On draw, pick & remove a random card from deck
  const handleClick = () => {
    setClick(click + 1);

    // If the deck is empty, rebuild it
    if (deck.length === 0) {
      const newDeck = buildDeck(cardDeck);
      setDeck(newDeck);
    }

    // Then draw a card at random
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    setDrawnCard(card);

    // Remove that card from the deck
    const newDeck = [...deck];
    newDeck.splice(randomIndex, 1);
    setDeck(newDeck);
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      <button
        onClick={() => {
          setClick(0);
          setDrawnCard(null);
          const newDeck = buildDeck(cardDeck);
          setDeck(newDeck);
        }}
        className="btn btn-primary"
      >
        Reset Deck
      </button>

      <button
        onClick={handleClick}
        className={clsx(
          "some-styles",
          // for example animation class:
          click !== 0 &&
            "animate-hflip transition-all duration-300 ease-in-out",
        )}
      >
        {/* If you haven't drawn a card yet (click=0), show something else */}
        {click === 0 && (
          <span className="text-9xl font-bold text-white">Sorry</span>
        )}

        {/* If a card is drawn, show it */}
        {drawnCard && (
          <>
            <Card drawnCard={drawnCard} click={click} />
          </>
        )}
      </button>
    </div>
  );
};

export default ExpCardDeck;
