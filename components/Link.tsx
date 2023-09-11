import React, { FC } from "react";
import clsx from "clsx";

type LinkProps = {
  title?: string;
  href: string;
  inline?: boolean;
  className?: string;
};

const Link: FC<LinkProps> = ({ title, href, inline, className }) => {
  if (inline) {
    return (
      <a
        className={clsx(
          "hover:bg-gray-150 rounded-lg transition ease-in duration-100",
          className
        )}
        href={href}
        target="_blank"
      >
        {title}
      </a>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      className="group inline-flex items-center hover:underline"
    >
      {title}
      <span
        className={clsx(
          "-ml-0.2 inline-flex items-center text-gray-550 print:text-black font-normal group-hover:text-gray-700 transition duration-100 ease-in",
          className
        )}
      >
        <svg
          className="pb-0.7 w-4.5 text-gray-600 group-hover:text-gray-700 change-color-fast print:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            className="fill-current"
            d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"
          />
        </svg>
      </span>
    </a>
  );
};

export default Link;
