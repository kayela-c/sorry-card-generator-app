import SorryDeckUI from "@/components/ui/SorryDeckUi";

import React from "react";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      {/* render deck ui */}
      <SorryDeckUI />
    </main>
  );
}
