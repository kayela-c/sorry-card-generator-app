"use client";

import { useStore } from "@/stores/store";
import React from "react";

export function BearCounter() {
  const bears = useStore((state) => state.bears);
  return <h1>{bears} around here...</h1>;
}

export function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation);
  return (
    <button className="btn btn-primary" onClick={increasePopulation}>
      one up
    </button>
  );
}

export function ResetBears() {
  const decreasePopulation = useStore((state) => state.removeAllBears);

  return (
    <button className="btn btn-primary" onClick={decreasePopulation}>
      None
    </button>
  );
}
