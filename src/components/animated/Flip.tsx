import React from "react";

const Flip = () => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={clsx(
          "relative flex h-96 w-60 bg-white shadow-lg transition-transform duration-700 ease-in-out",
          drawnCard && "rotate-y-180",
        )}
      >
        <div className="backface-hidden absolute inset-0 flex items-center justify-center">
          {/* Card Front */}
          <p className="text-xl font-bold text-black">Click to Draw</p>
        </div>
        <div className="rotate-y-180 backface-hidden absolute inset-0 flex items-center justify-center bg-blue-500 text-white">
          {/* Card Back (Drawn Card) */}
          <p className="text-xl font-bold">{drawnCard?.title}</p>
        </div>
      </button>
    </div>
  );
};

export default Flip;
