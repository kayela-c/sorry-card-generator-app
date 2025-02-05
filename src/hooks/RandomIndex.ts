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

