"use client";
import { useGame } from "@/hooks/useGame";
import React from "react";
import Form from "./Form";
import MemoryCard from "./MemoryCard";
import { levelDifficulty } from "@/utils/settings";

export const MemoryDeckUI: React.FC = () => {
  const { isGameOn, emojisData, startGame } = useGame(levelDifficulty);

  //function to turn the card
  function turnCard() {
    alert("Memory card clicked");
  }

  //render the component with the state data
  return (
    <>
      <main>
        <h1 className="text-bold pb-6 text-center text-4xl text-accent">
          Memory
        </h1>
        {!isGameOn && <Form handleClick={startGame} />}
        {isGameOn && (
          <ul className="grid grid-cols-5 gap-4 px-4">
            {emojisData.map((emoji, index) => (
              <MemoryCard key={index} handleClick={turnCard} data={[emoji]} />
            ))}
          </ul>
        )}
      </main>
    </>
  );
};
