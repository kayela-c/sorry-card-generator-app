export type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

export type Click = number;

export type Data = [{ name: string; htmlCode: Array<string> }];

export type Event = () => void;

export type Emoji = { htmlCode: string[]; name: string; index: number };

export type SelectedCards = { name: string; index: number }[];

export type MatchedCards = { name: string; index: number }[];

export interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}

export interface FormProps {
  handleClick: (e: React.FormEvent) => void;
}

export interface MemoryCardProps {
  selectedCards: { name: string; index: number }[];
  matchedCards: { name: string; index: number }[];
  handleClick: (name: string, index: number) => void;
  data: { name: string; htmlCode: string[] }[];
}
