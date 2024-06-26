import clsx from "clsx";
import React, { PropsWithChildren } from "react";

interface CsButtonProps {
  onClick: () => void;
  containerClass?: string;
}

const CsButton = ({
  onClick,
  children,
  containerClass,
}: PropsWithChildren<CsButtonProps>) => {
  return (
    <button
      className={clsx(
        "bg-light-blue1 dark:bg-dark-blue rounded-xl px-4 py-3 md:px-6 md:py-3 text-white hover:bg-dark-blue3 body-txt text-sm md:text-base font-bold",
        containerClass
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CsButton;
