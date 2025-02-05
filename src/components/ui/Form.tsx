import React from "react";
import { RegularButton } from "../common/buttons";
import { FormProps } from "@/types/cardTypes";

const Form = ({ handleClick }: FormProps) => {
  return (
    <div className="flex justify-center">
      <RegularButton handleClick={handleClick}>Start</RegularButton>
    </div>
  );
};

export default Form;
