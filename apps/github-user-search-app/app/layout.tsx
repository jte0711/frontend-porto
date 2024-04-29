import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--space-mono",
});

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={clsx(
          spaceMono.variable,
          "bg-light-grey2 dark:bg-dark-black1 min-w-screen min-h-screen flex justify-center items-center"
        )}
      >
        {children}
      </body>
    </html>
  );
}
