import React, { PropsWithChildren } from "react";

interface CsButtonProps {
  onClick: () => void;
}

const CsButton = ({ onClick, children }: PropsWithChildren<CsButtonProps>) => {
  return (
    <button
      className="bg-light-blue1 dark:bg-dark-blue rounded-xl px-6 py-3 text-white hover:bg-dark-blue3 h3-txt font-bold"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CsButton;
