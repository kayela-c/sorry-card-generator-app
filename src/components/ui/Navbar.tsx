import React from "react";
import { themes } from "@/styles/themes";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
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
              className="menu dropdown-content z-[1] mt-3 max-h-60 w-52 overflow-y-auto rounded-box bg-base-300 p-2 text-base-content shadow-2xl"
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
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Sorry Deck</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-circle btn-ghost">
            <div className="indicator">
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge indicator-item badge-info badge-xs"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
