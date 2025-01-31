import React from "react";
import clsx from "clsx";

type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

interface CardProps {
  drawnCard: DeckArry;
  click: number;
}

const Card: React.FC<CardProps> = ({ drawnCard, click }) => {
  return (
    <div>
      {" "}
      <div className="">
        <button
          className={clsx(
            "card my-3 flex h-96 w-60 justify-between bg-base-100 p-3 drop-shadow-xl transition-all duration-500",
            //click !== 0 && "animate-[hflip_1s_ease-in-out] hover:scale-95",
            click !== 0 &&
              "animate-[shake_0.5s_ease-in-out] opacity-100 hover:scale-95",
          )}
          key={drawnCard.id}
        >
          <p className="flex gap-3 text-xs">
            {/* upper left corner of card */}
            {drawnCard.id !== "sorry" && (
              <span
                className={clsx(
                  click !== 0
                    ? "size-[48px] rounded-e-3xl rounded-tl-3xl bg-accent p-4 font-bold text-accent-content"
                    : "hidden",
                )}
              >
                {drawnCard.title}
              </span>
            )}
            <div className="min-w-[155px] self-center">{drawnCard.rule}</div>
          </p>
          <div
            className={clsx(
              click !== 0
                ? "mx-auto flex size-44 flex-col justify-center rounded-full border-4 border-black bg-conic-four transition-all duration-700 ease-in-out"
                : "hidden",
            )}
          >
            <div className="mx-auto flex size-36 flex-col justify-center rounded-full border-4 border-black bg-gradient-to-br from-black via-zinc-500 via-60% to-black text-center">
              <p
                className={clsx(
                  drawnCard.id !== "sorry"
                    ? "my-auto text-8xl font-bold text-white"
                    : "my-auto text-5xl font-bold text-white",
                )}
              >
                {drawnCard.title}
              </p>
            </div>
          </div>

          <div className="flex -scale-100 justify-between gap-3 text-xs">
            {/* lower right corner of card */}
            {drawnCard.id !== "sorry" && (
              <span
                className={
                  click !== 0
                    ? "size-[48px] rounded-e-3xl rounded-tl-3xl bg-accent p-4 font-bold text-accent-content"
                    : "hidden"
                }
              >
                {drawnCard.title}
              </span>
            )}
            <div className="min-w-[155px] self-center">{drawnCard.rule}</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
