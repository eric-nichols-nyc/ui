"use client";
import { ThemeToggler } from "@/components/theme-toggler";
import { DisplayContainer } from "@/components/display";
import { Cards } from "@/components/cards";
import Heading, { getHeadingSize } from "@/components/heading";
export default function Home() {
  return (
    <>
      <ThemeToggler />
      <DisplayContainer className="text-center gap-1 p-8 md:p-16 lg:p-24">
        <Heading size="xl" className={"primaryText font-bold"}>
          This is your theme
        </Heading>
        <span className={getHeadingSize("xs")}>Shadcn theme colors.</span>
      </DisplayContainer>
      <Cards />
    </>
  );
}
