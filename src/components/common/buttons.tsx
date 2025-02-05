import React from "react";
import { ButtonProps } from "@/types/cardTypes";

export const RegularButton = ({ children, handleClick }: ButtonProps) => {
  return (
    <button onClick={handleClick} className="btn btn-accent btn-lg btn-wide">
      {children}
    </button>
  );
};
