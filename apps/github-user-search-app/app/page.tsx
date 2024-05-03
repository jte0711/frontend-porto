"use client";
import CsSearchbar from "@component/CsSearchbar";
import CsBody from "@module/Body";
import Navbar from "@module/Navbar";
import { useGitHub } from "@request/useGitHub";

/**
 * TODO:
 * - Intiial state
 * - show in UI
 * - show error if not found
 */

/**
 * TODO:
 * - this is a version where using 'use client'
 * - make a version using react server component
 */

export default function Page(): JSX.Element {
  const res = useGitHub();
  return (
    <main className="w-full lg:w-[730px] flex flex-col justify-center items-center">
      <Navbar />
      <CsSearchbar containerClass="mt-9" />
      <CsBody />
    </main>
  );
}
