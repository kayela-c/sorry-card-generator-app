"use client";

import React from "react";
import { useState } from "react";
import Form from "./Form";
import MemoryCard from "./MemoryCard";

const MemoryDeckUI = () => {
  const [isGameOn, setIsGameOn] = useState(false);
  //const [emojisData, setEmojisData] = useState<Array>([]);

  async function startGame(e: { preventDefault: () => void }) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature",
      );

      // if response is ok store in const data

      if (!response.ok) {
        throw new Error("Fetch error");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    setIsGameOn(true);
  }

  function turnCard() {
    console.log("Memory card clicked");
  }
  return (
    <>
      <main>
        <h1 className="text-center text-2xl text-accent">Memory</h1>
        {!isGameOn && <Form handleClick={startGame} />}
        {isGameOn && <MemoryCard handleClick={turnCard} />}
      </main>
    </>
  );
};

export default MemoryDeckUI;
