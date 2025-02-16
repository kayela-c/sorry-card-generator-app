"use client";
import React from "react";
import clsx from "clsx";
import Card from "./Card";
import ResetBtn from "../common/ResetBtn";
import { useGameStore } from "@/stores/gameStore";

//reset button needs to use state management to reset the deck

const SorryDeckUI = () => {
  const drawnCard = useGameStore((state) => state.drawnCard);
  const click = useGameStore((state) => state.click);
  const drawCard = useGameStore((state) => state.drawCard);
  return (
    <>
      {!drawnCard && ( //show allert
        <div
          role="alert"
          className="alert alert-warning absolute top-24 max-w-lg"
        >
          Click the sorry card to pull a card
        </div> // hide allert
      )}
      <div className="p-4">
        <button
          onClick={drawCard}
          className={clsx(
            "",
            // Add animation classes if needed
          )}
        >
          {click === 0 ? (
            <div className="card my-3 flex h-96 w-60 justify-between bg-slash-four p-3 font-bold text-black drop-shadow-xl transition-all duration-700 ease-in-out">
              <div className="translate-y-40 -rotate-90">
                <div className="text-4xl text-white shadow-lg">Lo Siento</div>
              </div>
            </div>
          ) : drawnCard ? (
            <Card drawnCard={drawnCard} click={click} />
          ) : (
            <ResetBtn />
          )}
        </button>
      </div>
    </>
  );
};

export default SorryDeckUI;
