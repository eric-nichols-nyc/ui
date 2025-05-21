"use client";

import { useEffect, useState } from "react";

export function ThemeToggler() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
