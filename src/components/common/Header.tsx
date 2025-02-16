import React from "react";
import { PiBell } from "react-icons/pi";
import ResetBtn from "./ResetBtn";

const Header = () => {
  return (
    <div className="flex justify-evenly rounded-2xl bg-neutral p-4 text-neutral-content shadow-lg">
      <div className="self-center">
        <h1 className="text-3xl font-bold">Sorry Deck</h1>
      </div>
      <div className="min-w-[240px] self-center">
        <ResetBtn />
      </div>
      <div className="flex space-x-4 self-center text-2xl">
        <PiBell />
      </div>
    </div>
  );
};

export default Header;
