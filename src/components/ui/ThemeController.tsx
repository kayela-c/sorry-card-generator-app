import React from "react";
import { themes } from "@/styles/themes";

const ThemeController = () => {
  return (
    <div className="">
      <div className="dropdown mb-72">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
          <svg
            width="12px"
            height="12px"
            className="inline-block h-2 w-2 fill-current opacity-60"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="dropdown dropdown-content z-[1] max-h-60 w-52 rounded-box bg-base-300 p-2 shadow-2xl"
        >
          {
            // Theme options go here
            //map the daisy ui themes to li elements
            themes.map((theme) => (
              <li key={theme}>
                <input
                  key={theme}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start"
                  aria-label={theme}
                  value={theme}
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default ThemeController;
