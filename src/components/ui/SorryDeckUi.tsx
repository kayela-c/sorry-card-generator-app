"use client";
import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Card from "./Card";
import { useDeckStore } from "@/stores/deckStore";

const SorryDeckUI = () => {
  const { drawnCard, click, drawCard } = useDeckStore();

  return (
    <>
      <div className="p-4">
        <div
          onClick={drawCard}
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              drawCard();
            }
          }}
        >
          {click === 0 ? (
            <div className="card my-3 flex h-96 w-60 justify-between bg-slash-four p-3 font-bold text-black drop-shadow-xl transition-all duration-700 ease-in-out">
              <div className="translate-y-40 -rotate-90">
                <Image
                  src="/SorryText.svg"
                  alt="sorry logo"
                  width={200}
                  height={100}
                  priority
                />
              </div>
            </div>
          ) : drawnCard ? (
            <Card drawnCard={drawnCard} click={click} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SorryDeckUI