"use client";

import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    const html = document.documentElement;

    html.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 left-6 z-50 rounded-full bg-black px-4 py-3 text-white shadow-lg"
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
