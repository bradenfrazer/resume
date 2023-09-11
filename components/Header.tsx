import React, { FC } from "react";

type HeaderProps = {
  children: any;
};

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="flex flex-col sm:flex-row mb-8 md:mb-11 gap-[2.1875rem]">
      {children}
    </header>
  );
};

export default Header;
