import React from "react";

const Slide = () => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={clsx(
          "relative flex h-96 w-60 items-center justify-center rounded-lg bg-white shadow-lg transition-all duration-700 ease-in-out",
          drawnCard ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
        )}
      >
        {drawnCard ? (
          <p className="text-xl font-bold">{drawnCard.title}</p>
        ) : (
          <p>Click to Draw</p>
        )}
      </button>
    </div>
  );
};

export default Slide;
