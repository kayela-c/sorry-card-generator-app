import MemoryDeckUI from "@/components/ui/MemoryDeckUI";
import SorryDeckUI from "@/components/ui/SorryDeckUi";
import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* render deck ui */}
      {/* <MemoryDeckUI /> */}
      <SorryDeckUI />
    </main>
  );
}
