import clsx from "clsx";
import React, { ReactNode } from "react";

interface CsLinkProps {
  text?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

const CsLink = ({ text, disabled = false, icon }: CsLinkProps) => {
  return (
    <div className={clsx("flex items-center", disabled && "opacity-50")}>
      {icon ?? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-5 text-light-blue2 dark:text-white"
        >
          <path
            fillRule="evenodd"
            d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <p
        className={clsx(
          "text-light-blue2 dark:text-white body-txt ml-4 cursor-default",
          disabled ? "opacity-50" : "hover:cursor-pointer hover:underline"
        )}
      >
        {disabled ? "Not available" : text}
      </p>
    </div>
  );
};

export default CsLink;
