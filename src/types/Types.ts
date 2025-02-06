export type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

export type Click = number;

export type Data = [{ name: string; htmlCode: Array<string> }];

export type Event = () => void;

//might be redundant
export type Emoji = { htmlCode: string[]; name: string; index: number };

export type Card = { name: string; index: number };

export type CardClick = (name: string, index: number) => void;

export interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export interface FormProps {
  handleClick: (e: React.FormEvent) => void;
}

export interface MemoryCardProps {
  //selectedCards: SelectedCards;
  //matchedCards: MatchedCards;
  handleClick: CardClick;
  //data: Emoji[];
}

export interface EmojiButtonProps {

  content: string;

  selectedCardEntry: number;

  matchedCardEntry: number;

  handleClick: () => void;

}
