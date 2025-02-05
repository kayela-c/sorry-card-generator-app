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

export interface FormProps {
  handleClick: (e: React.FormEvent) => void;
}

export interface MemoryCardProps {
  //card: DeckArry;
  //flipped: boolean;
  handleClick: () => void;
  data: any;
}
