import CsLink from "@component/CsLink";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

interface CsBodyProps {
  containerClass?: string;
}

const CsBody = ({ containerClass }: CsBodyProps) => {
  return (
    <section
      className={clsx(
        "flex w-full py-8 px-6 mt-4 lg:p-12 lg:mt-6 bg-white dark:bg-dark-black2 rounded-2xl",
        containerClass
      )}
    >
      <div className="hidden lg:block">
        <Image
          src={"/octocat.png"}
          alt="Octocat logo"
          width={117}
          height={117}
        />
      </div>
      <div className="lg:ml-9 w-full">
        <div className="flex">
          <Image
            src={"/octocat.png"}
            alt="Octocat logo"
            width={70}
            height={70}
            className="lg:hidden"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ml-5 lg:ml-0">
            <h1 className="h3-txt font-bold lg:h1-txt text-light-black dark:text-white">
              The Octocat
            </h1>
            <span className="lg:hidden h4-txt lg:h3-txt text-light-blue1">
              @octocat
            </span>
            <p className="h4-txt lg:body-txt text-light-grey1 dark:text-white mt-[6px] lg:mt-0">
              Joined 15 Jul 2011
            </p>
          </div>
        </div>
        <span className="hidden lg:block h4-txt lg:h3-txt text-light-blue1 mt-[2px]">
          @octocat
        </span>
        <p className="h4-txt lg:body-txt mt-8 lg:mt-5 text-light-blue2 dark:text-white">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
        {/* Count Component */}
        <div className="mt-6 lg:mt-8 grid grid-cols-3 py-[18px] lg:py-4 px-[14px] lg:px-8 gap-x-8 w-full rounded-[10px] bg-light-grey2 dark:bg-dark-black1">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h3 className="text-light-blue2 dark:text-white h3-txt text-[11px] lg:h4-txt">
              Repos
            </h3>
            <p className="mt-[1px] text-light-black dark:text-white h3-txt lg:h2-txt">
              8
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h3 className="text-light-blue2 dark:text-white h3-txt text-[11px] lg:h4-txt">
              Followers
            </h3>
            <p className="mt-[1px] text-light-black dark:text-white h3-txt lg:h2-txt">
              3939
            </p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h3 className="text-light-blue2 dark:text-white h3-txt text-[11px] lg:h4-txt">
              Following
            </h3>
            <p className="mt-[1px] text-light-black dark:text-white h3-txt lg:h2-txt">
              9
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-5 mt-6 lg:mt-9">
          <CsLink
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-light-blue2 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="San Fransisco"
          />
          <CsLink
            icon={
              <svg height="18" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 2.799a8.549 8.549 0 01-2.363.647 4.077 4.077 0 001.804-2.266 8.194 8.194 0 01-2.6.993A4.099 4.099 0 009.75 4.977c0 .324.027.637.095.934-3.409-.166-6.425-1.8-8.452-4.288a4.128 4.128 0 00-.56 2.072c0 1.42.73 2.679 1.82 3.408A4.05 4.05 0 01.8 6.598v.045a4.119 4.119 0 003.285 4.028 4.092 4.092 0 01-1.075.135c-.263 0-.528-.015-.776-.07.531 1.624 2.038 2.818 3.831 2.857A8.239 8.239 0 01.981 15.34 7.68 7.68 0 010 15.285a11.543 11.543 0 006.29 1.84c7.545 0 11.67-6.25 11.67-11.667 0-.182-.006-.357-.015-.53A8.18 8.18 0 0020 2.798z"
                  fill="#4b6a9b"
                />
              </svg>
            }
            disabled
          />
          <CsLink text="https://github.blog" />
          <CsLink
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5 text-light-blue2 dark:text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            text="@github"
          />
        </div>
      </div>
    </section>
  );
};

export default CsBody;
