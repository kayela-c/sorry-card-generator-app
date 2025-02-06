import { Data } from "@/types/Types";

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
 * Creates a slice of the data array based on random indices
 * @param data - The source data array
 * @param levelDifficulty - The number of items to include in the slice
 * @returns A new array containing random items from the source data
 */
export function getDataSlice(data: Data, levelDifficulty: number) {
  const randomIndex = getRandomIndex(data, levelDifficulty);
  const dataSlice = randomIndex.map((index) => data[index]);
  return dataSlice;
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

interface SelectedCard {
  name: string;
  index: number;
}

/**
 * Handles the card selection logic in the memory game
 * @param name - The name/identifier of the selected card
 * @param index - The index of the selected card
 * @param selectedCards - Array of currently selected cards
 * @param setSelectedCards - State setter function for selected cards
 */
export function turnCard(
  name: string,
  index: number,
  selectedCards: SelectedCard[],
  setSelectedCards: React.Dispatch<React.SetStateAction<SelectedCard[]>>,
) {
  const selectedCardEntry = selectedCards.find(
    (emoji) => emoji.index === index,
  );

  if (!selectedCardEntry && selectedCards.length < 2) {
    setSelectedCards((prevSelectedCards) => [
      ...prevSelectedCards,
      { name, index },
    ]);
  } else if (!selectedCardEntry && selectedCards.length === 2) {
    setSelectedCards([{ name, index }]);
  }
}
