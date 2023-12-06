import React from "react";

const Header = () => {
  return (
    <div className="absolute pl-4 z-10 w-full bg-gradient-to-b from-black">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />

      {/* <div className="flex mr-[14rem] items-center text-[#e5e5e5] font-['Netflix Sans']">
        <p className="m-2">Home</p>
        <p className="m-2">TV Shows</p>
        <p className="m-2">Movies</p>
        <p className="m-2">New & Popular</p>
        <p className="m-2">My List</p>
        <p className="m-2">Browse By Languages</p>
      </div>
      <div className="flex items-center mr-10">
        <ul className="flex items-center text-[#e5e5e5]">
          <li className="m-2">Search</li>
          <li className="m-2">Children</li>
          <li className="m-2">Bell</li>
          <li className="m-2">Profile</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Header;
