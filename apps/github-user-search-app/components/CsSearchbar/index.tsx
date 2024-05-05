"use client";
import CsButton from "@component/CsButton";
import clsx from "clsx";
import React, { Dispatch, SetStateAction } from "react";

interface CsSearchbarProps {
  containerClass?: string;
  showError?: boolean;
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}

const CsSearchbar = ({
  containerClass,
  showError,
  searchValue,
  setSearchValue,
  onSubmit,
}: CsSearchbarProps) => {
  return (
    <section
      className={clsx(
        "flex w-full items-center py-[7px] pr-[7px] md:py-[9.5px] md:pr-[10px] pl-4 md:pl-8 bg-white dark:bg-dark-black2 shadow-2xl dark:drop-shadow-none rounded-2xl",
        containerClass
      )}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 md:size-6 text-dark-blue"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <input
        className="flex flex-grow ml-2 md:ml-6 h4-txt md:text-lg text-light-black2 dark:text-white placeholder-light-blue2 dark:placeholder-white bg-transparent outline-none"
        placeholder="Search GitHub username…"
        value={searchValue}
        onChange={(e) => {
          e.preventDefault();
          setSearchValue(e.currentTarget.value);
        }}
      />
      {showError && (
        <p className="cursor-default text-light-red h4-txt md:body-txt font-bold ml-2 md:ml-6">
          No results
        </p>
      )}
      <CsButton containerClass="ml-2 md:ml-6" onClick={onSubmit}>
        Search
      </CsButton>
    </section>
  );
};

export default CsSearchbar;
