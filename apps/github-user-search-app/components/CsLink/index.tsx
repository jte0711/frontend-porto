import { LinkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";

interface CsLinkProps {
  url?: string;
  disabled?: boolean;
}

const CsLink = ({ url, disabled = false }: CsLinkProps) => {
  return (
    <div className={clsx("flex items-center", disabled && "opacity-50")}>
      <LinkIcon className="text-light-blue2 dark:text-white size-5" />
      <p
        className={clsx(
          "text-light-blue2 dark:text-white body-txt ml-4 cursor-default",
          disabled ? "" : "hover:cursor-pointer hover:underline"
        )}
      >
        {disabled ? "Not available" : url}
      </p>
    </div>
  );
};

export default CsLink;
