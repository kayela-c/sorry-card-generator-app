import React from "react";
import { RegularButton } from "../common/buttons";
import { ButtonProps } from "@/types/cardTypes";

const Form = ({ handleClick }: ButtonProps) => {
  return (
    <div className="">
      <RegularButton handleClick={handleClick}>Submit</RegularButton>
    </div>
  );
};

export default Form;
