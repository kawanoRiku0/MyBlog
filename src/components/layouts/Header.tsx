import Link from "next/link";
import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="text-gray-600 body-font bg-blue-500 shadow-md">
      <div className="container mx-auto flex  p-5 flex-row justify-between  items-center">
        <Link href={"/"} passHref>
          <a className="flex title-font font-medium items-center  ">
            <span className="ml-3 text-xl text-white hover:text-gray-900 transition-all">
              My Blog
            </span>
          </a>
        </Link>
        <nav className="flex items-center text-base justify-center">
          <a className="mr-5 text-white hover:text-gray-900 hover:cursor-pointer transition-all">
            Profile
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
