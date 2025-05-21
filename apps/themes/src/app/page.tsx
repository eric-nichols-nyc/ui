"use client";
import { ThemeToggler } from "@/components/theme-toggler";
import { Display } from "@/components/display";
import { Cards } from "@/components/cards";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ThemeToggler />
      <Display />
      <Cards />
    </div>
  );
}
