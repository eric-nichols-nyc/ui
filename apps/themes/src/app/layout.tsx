import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Themes",
  description: "Themes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={clsx(inter.className)}>
        <div className="w-full flex flex-col justify-between md:px-8 px-4 lg:px-12 min-h-screen max-w-[1700px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
