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
  title: "GitHub User Search App",
  description: "This app is created to let you search for GitHub User",
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
          "bg-light-grey2 dark:bg-dark-black1 min-w-screen min-h-screen flex justify-center items-center",
          "py-8 px-6 md:px-24 md:pt-[140px] lg:p-0"
        )}
      >
        {children}
      </body>
    </html>
  );
}
