import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//not being used in this project. Left here for future reference
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
