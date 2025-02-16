"use client";
import { useState } from "react";
import { levelDifficulty } from "@/utils/settings";
import { Data } from "@/types/Types";

export function useGame() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState<
    Array<{ name: string; htmlCode: string[] }>
  >([]);
  //const [isGameOver, setIsGameOver] = useState<boolean>(false);

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
      const dataSlice = await getDataSlice(data, levelDifficulty);

      const emojisArray = await getEmojisArray(dataSlice);

      //set the sliced data to the emojis
      setEmojisData(emojisArray);

      //console log the data sample
      console.log(getRandomIndex(data, levelDifficulty));

      //console log the data sample
      console.log(emojisArray);
      //set the game to true after the data has been fetched
      setIsGameOn(true);

      //catch any errors and log them to the console
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isGameOn,
    emojisData,
    isGameOnData: true,
    startGame,
  };
}

/**
 * Creates a slice of the data array based on random indices
 * @param data - The source data array
 * @param levelDifficulty - The number of items to include in the slice
 * @returns A new array containing random items from the source data
 */
export function getDataSlice(data: Data, levelDifficulty: number) {
  const randomIndex = getRandomIndex(data, levelDifficulty);

  const dataSlice = randomIndex.reduce((array, index) => {
    array.push(data[index]);
    return array;
  }, []);

  return dataSlice;
}

/**
 * Generates an array of unique random indices based on the provided data length and difficulty level.
 *
 * @param data - The array of data from which random indices are to be generated.
 * @param levelDifficulty - The number of unique random indices to generate.
 * @returns An array of unique random indices.
 */
export function getRandomIndex(data: Data, levelDifficulty: number) {
  if (levelDifficulty > data.length) {
    throw new Error("Requested difficulty exceeds available data length");
  }

  const randomIndexArray: number[] = [];
  const maxAttempts = data.length * 2; // Prevent infinite loops
  let attempts = 0;

  while (randomIndexArray.length < levelDifficulty && attempts < maxAttempts) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomIndexArray.includes(randomIndex)) {
      randomIndexArray.push(randomIndex);
    }
    attempts++;
  }

  if (randomIndexArray.length < levelDifficulty) {
    throw new Error("Could not generate enough unique indices");
  }

  return randomIndexArray;
}

/**
 * Creates an array of paired emojis and shuffles them randomly
 * @param data - The source emoji data array
 * @returns A new array containing pairs of emojis in random order
 */
export function getEmojisArray(data: Data) {
  // Step 1: Create a new variable, "pairedEmojisArray". This variable should be an array that includes each emoji object from the "data" array twice.
  const pairedEmojisArray = [...data, ...data];

  // Step 2: Use the Fisher-Yates algorithm to shuffle "pairedEmojisArray"
  for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = pairedEmojisArray[i];
    pairedEmojisArray[i] = pairedEmojisArray[j];
    pairedEmojisArray[j] = temp;
  }

  // Step 3: Return the shuffled array
  return pairedEmojisArray;
}


