"use client";
import React from "react";
import { themes } from "@/styles/themes";
import { useEffect } from "react";
import { themeChange } from "theme-change";

const ThemeController = () => {
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
          {
            // Theme options go here
            //map the daisy ui themes to li elements
            themes.map((theme) => (
              <li key={theme}>
                <input
                  key={theme}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-ghost btn-sm btn-block justify-start capitalize"
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
