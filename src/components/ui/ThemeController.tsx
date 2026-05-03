"use client";
import React from "react";
import { themes } from "@/styles/themes";
import { useThemeStore } from "@/stores/themeStore";

const ThemeController = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-300 p-2 text-base-content shadow-2xl"
        >
          {themes.map((themeName) => (
            <li key={themeName}>
              <button
                className={`btn btn-ghost btn-sm btn-block justify-start capitalize ${
                  theme === themeName ? "btn-active" : ""
                }`}
                onClick={() => setTheme(themeName)}
              >
                {themeName}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThemeController;