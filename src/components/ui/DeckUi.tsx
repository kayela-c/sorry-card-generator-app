"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Card from "./Card";
import { useDeck } from "@/hooks/useDeck";

const DeckUI = () => {
  const { deck, drawnCard, click, drawCard } = useDeck();

  return (
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
              <Image
                src={require("@/img/sorry_logo.png")}
                alt="sorry logo"
                height={0}
                width={0}
              />
            </div>
          </div>
        ) : drawnCard ? (
          <Card drawnCard={drawnCard} click={click} />
        ) : null}
      </button>
    </div>
  );
};

export default DeckUI;
