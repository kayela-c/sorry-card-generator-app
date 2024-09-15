"use client";
//import cards from "./cards.json";
import clsx from "clsx";
import { cardDeck } from "~/data/cards";
import { useState } from "react";

type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

type Click = number;

const CardDeck = () => {
  const [card, setCard] = useState<DeckArry>(cardDeck);

  const [click, setClick] = useState<Click>(0);

  const [effect, setEffect] = useState(false);

  const handleClick = () => () => {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    setClick(click + 1);
    setEffect(true);
    setCard(cardDeck[randomIndex]);
  };

  return (
    <>
      {card && (
        <div className="">
          <button
            className={clsx(
              effect &&
                "animate-hflip transition-all duration-300 ease-in-out [backface-visibility:hidden] [transform-style:preserve-3d]",
              click !== 0
                ? "card my-3 flex h-96 w-60 justify-between bg-zinc-50 p-3 drop-shadow-xl"
                : "card my-3 flex h-96 w-60 justify-between bg-gradient-to-br from-yellow-300 via-blue-700 to-red-700 p-3 drop-shadow-xl",
            )}
            key={card.id}
            onClick={handleClick()}
          >
            <p className="flex gap-3 text-xs">
              <span
                className={
                  click !== 0
                    ? "hidden"
                    : "-translate-x-16 translate-y-32 -rotate-90 text-9xl font-bold text-white"
                }
              >
                Sorry
              </span>
              {card.id !== "sorry" && (
                <span
                  className={clsx(
                    click !== 0
                      ? "rounded-e-3xl rounded-tl-3xl bg-black px-4 py-4 font-bold text-white"
                      : "hidden",
                  )}
                >
                  {card.title}
                </span>
              )}
              {card.rule}
            </p>
            <div
              className={clsx(
                click !== 0
                  ? "mx-auto flex size-44 flex-col justify-center rounded-full border-4 border-black bg-gradient-to-b from-yellow-300 via-blue-600 to-red-600"
                  : "hidden",
              )}
            >
              <div className="mx-auto flex size-36 flex-col justify-center rounded-full border-4 border-black bg-gradient-to-br from-black via-zinc-500 via-60% to-black text-center">
                <p
                  className={clsx(
                    card.id !== "sorry"
                      ? "my-auto text-8xl font-bold text-white"
                      : "my-auto text-5xl font-bold text-white",
                  )}
                >
                  {card.title}
                </p>
              </div>
            </div>

            <p className="flex -scale-100 gap-3 text-xs">
              {card.id !== "sorry" && (
                <span
                  className={
                    click !== 0
                      ? "rounded-e-3xl rounded-tl-3xl bg-black px-4 py-4 font-bold text-white"
                      : "hidden"
                  }
                >
                  {card.title}
                </span>
              )}
              {card.rule}
            </p>
          </button>
        </div>
      )}
    </>
  );
};

export default CardDeck;
