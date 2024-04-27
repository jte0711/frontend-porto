import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import React from "react";

interface CsToggleProps {
  abc?: string;
}

const CsToggle = ({ abc }: CsToggleProps) => {
  return (
    <div className="flex items-center cursor-pointer group">
      <p className="dark:hidden h4-txt text-light-blue2 group-hover:text-light-black2">
        Light
      </p>
      <p className="hidden dark:block h4-txt text-white group-hover:text-dark-blue2">
        Dark
      </p>
      <SunIcon className="size-5 text-light-blue2 group-hover:text-light-black2 dark:hidden ml-4" />
      <MoonIcon className="hidden dark:block size-5 text-white group-hover:text-dark-blue2 ml-4" />
    </div>
  );
};

export default CsToggle;
