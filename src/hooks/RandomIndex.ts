import { Data } from "@/types/Types";

/**
 * Generates an array of unique random indices based on the provided data length and difficulty level.
 *
 * @param data - The array of data from which random indices are to be generated.
 * @param levelDifficulty - The number of unique random indices to generate.
 * @returns An array of unique random indices.
 */
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

export function getEmojisArray(data: Data) {
  // Step 1: Create a new variable, "pairedEmojisArray". This variable should be an array that includes each emoji object from the "data" array twice.
  const pairedEmojisArray = [...data, ...data];

  // Step 2: Use the Fisher-Yates algorithm to shuffle "pairedEmojisArray"
  for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pairedEmojisArray[i], pairedEmojisArray[j]] = [pairedEmojisArray[j], pairedEmojisArray[i]];
  }

  // Step 3: Return the shuffled array
  return pairedEmojisArray;
}
