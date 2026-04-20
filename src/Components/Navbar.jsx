import { useState } from "react";

export default function Navbar({ open, setOpen, theme, setTheme }) {
  return (
    <div>
      {/* Desktop Nav */}
      <div className="flex items-center justify-between p-4">
        <div className="font-bold">Logo</div>

        <div className="hidden sm:flex gap-2">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button
            className="text-xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "💥" : "🌙"}
          </button>
        </div>

        <button
          className="text-xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          =
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="flex flex-col items-center gap-2 text-slate-900 dark:bg-slate-900 dark:text-white p-4 sm:hidden">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <button
            className="text-xl cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "💥" : "🌙"}
          </button>
        </div>
      )}
    </div>
  );
}