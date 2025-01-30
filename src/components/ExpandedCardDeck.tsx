"use client";
import React from "react";

import clsx from "clsx";
import { useState } from "react";
import { cardDeck } from "@/data/cards"; // This is your original array
import Card from "./ui/Card";
import Image from "next/image";

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
        className="btn btn-primary text-white"
      >
        Reset Deck
      </button>

      <button
        onClick={handleClick}
        className={clsx(
          "",
          // for example animation class:
        )}
      >
        {/* If you haven't drawn a card yet (click=0), show something else */}
        {click === 0 && (
          <div className="bg-slash-four card my-3 flex h-96 w-60 justify-between p-3 font-bold text-black drop-shadow-xl transition-all duration-700 ease-in-out">
            <div className="translate-y-40 -rotate-90">
              <Image
                src={require("@/img/sorry_logo.png")}
                alt="sorry logo"
                height={0}
                width={0}
              />
            </div>
          </div>
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
