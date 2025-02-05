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

