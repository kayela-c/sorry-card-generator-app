import React from "react";
import { RegularButton } from "../common/buttons";
import { FormProps } from "@/types/cardTypes";

const Form = ({ handleClick }: FormProps) => {
  return (
    <div className="">
      <RegularButton handleClick={handleClick}>Submit</RegularButton>
    </div>
  );
};

export default Form;
