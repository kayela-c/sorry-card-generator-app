export type DeckArry = {
  id: string;
  title: string;
  rule: string;
  probability: number;
};

export type Click = number;

export type Data = [{ name: string; htmlCode: Array<string> }];

export type Event = () => void;

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
  data: { name: string; htmlCode: Array<string> };
}
