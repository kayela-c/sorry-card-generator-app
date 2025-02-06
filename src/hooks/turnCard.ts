import { useGameStore } from "@/stores/gameStore";

/**
 * Handles the card selection logic in the memory game
 * @param name - The name/identifier of the selected card
 * @param index - The index of the selected card
 * @param selectedCards - Array of currently selected cards
 * @param setSelectedCards - State setter function for selected cards
 */
export const turnCard = (name: string, index: number) => {
    const { selectedCards, setSelectedCards } = useGameStore();
  
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
    return selectedCardEntry;
  };

  