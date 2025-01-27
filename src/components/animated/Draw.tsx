import React from "react";

const Draw = () => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={clsx(
          "flex h-96 w-60 items-center justify-center rounded-lg bg-white shadow-lg transition-all duration-700 ease-in-out",
          drawnCard ? "scale-110 opacity-100" : "scale-90 opacity-50",
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

export default Draw;
