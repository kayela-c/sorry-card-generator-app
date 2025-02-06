"use client";
import { useState } from "react";
import {
  getDataSlice,
  getEmojisArray,
  getRandomIndex,
} from "@/hooks/gameLogic";

export function useGame(levelDifficulty: number) {
  const [emojisData, setEmojisData] = useState<
    Array<{ name: string; htmlCode: string[] }>
  >([]);
  const [isGameOn, setIsGameOn] = useState(false);
  const [selectedCards, setSelectedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);

  //async function to fetch data from the api
  const startGame = async () => {
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

      //slice the data to get the first 5 emojis
      const dataSlice = getDataSlice(data, levelDifficulty);

      // Create paired and shuffled emojis array
      const pairedEmojisArray = getEmojisArray(dataSlice);
      //set the sliced data to the emojis
      setEmojisData(pairedEmojisArray);

      //console log the data sample
      console.log(getRandomIndex(data, levelDifficulty));

      //console log the data sample
      console.log(pairedEmojisArray);

      //catch any errors and log them to the console
    } catch (error) {
      console.error(error);
    }
    //set the game to true after the data has been fetched
    setIsGameOn(true);
  };
  return {
    isGameOn,
    emojisData,
    isGameOnData: true,
    startGame,
    selectedCards,
    matchedCards,
    setSelectedCards,
    setMatchedCards,
  };
}
