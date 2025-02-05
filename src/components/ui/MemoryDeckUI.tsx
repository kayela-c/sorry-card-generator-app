"use client";

import React from "react";
import { useState } from "react";
import Form from "./Form";
import MemoryCard from "./MemoryCard";

const MemoryDeckUI = () => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  //async function to fetch data from the api
  async function startGame(e: { preventDefault: () => void }) {
    e.preventDefault();
    // try to gt data from api store response in an await function
    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature",
      );

      // if response is ok store in const data

      if (!response.ok) {
        //if response is not ok throw an error
        throw new Error("Fetch error");
      }
      //store the response in a const data
      //must use await because fetch is an async function
      //parse response to json
      const data = await response.json();
      //log the data to the console for debugging
      console.log(data);
      //slice the data to get the first 5 emojis
      const dataSample = data.slice(0, 5);
      //set the data to the state
      setEmojisData(dataSample);
      //console log the data sample
      console.log(dataSample);

      //catch any errors and log them to the console
    } catch (error) {
      console.error(error);
    }
    //set the game to true after the data has been fetched
    setIsGameOn(true);
  }

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
        {isGameOn && <MemoryCard handleClick={turnCard} />}
      </main>
    </>
  );
};

export default MemoryDeckUI;
