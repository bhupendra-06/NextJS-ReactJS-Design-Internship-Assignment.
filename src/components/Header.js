import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-custom text-white flex items-center justify-center ">
      <form className="p-2">
        <input type="search" placeholder="Search Here.." className="p-2 rounded-md"/>
      </form>
      <a className="p-6 text-sm hidden sm:inline-block">Categories</a>
      <a className="p-6 text-sm hidden sm:inline-block">Website Builders</a>
      <a className="p-6 text-sm sm:inline-block">Today's deals</a>
    </header>
  );
};

export default Header;
