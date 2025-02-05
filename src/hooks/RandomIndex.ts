import { Data } from "@/types/Types";

export function getRandomIndex(data: Data, levelDifficulty: number) {
  const randomIndexArray: number[] = [];

  for (let i = 0; i < levelDifficulty; i++) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomIndexArray.includes(randomIndex)) {
      randomIndexArray.push(randomIndex);
    } else {
      i--;
    }
  }
  return randomIndexArray;
}

export function getDataSlice(data: Data, levelDifficulty: number) {
  const randomIndex = getRandomIndex(data, levelDifficulty);
  const dataSlice = randomIndex.map((index) => data[index]);
  return dataSlice;
}

/**
 * Challenge:
 * 1) Below the "startGame" function, create a new function called "getDataSlice". The function should receive "data" as a parameter.
 * 2) Inside this function, make a call to "getRandomIndex" and store the return value in a variable called "randomIndex".
 * 3) Map over "randomIndex" and use the random numbers stored in this array to create a new array of random emojis selected from "data". Store this new array in a variable called "dataSlice" and return it at the bottom of the function.
 * 4) Inside the try block of the "startGame" function, make a call to "getDataSlice", passing "data" as an argument. Save the return value in a variable called "dataSlice".
 * 5) Delete the "dataSample" variable and replace "dataSample" with the new "dataSlice" variable in the "setEmojisData" function.
 * 6) Run the code and start a new game to check that your code is working.
 */
