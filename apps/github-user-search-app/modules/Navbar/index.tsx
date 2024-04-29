import CsToggle from "@component/CsToggle";
import React from "react";

const Navbar = () => {
  return (
    <section className="w-full flex justify-between">
      <h1 className="h1-txt text-light-black2 dark:text-white">devfinder</h1>
      <CsToggle />
    </section>
  );
};

export default Navbar;
