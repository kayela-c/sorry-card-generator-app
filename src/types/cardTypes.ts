export type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};


export type Click = number;

export interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
}