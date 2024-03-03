import React from "react";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./Menus";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:item-center md:justify-between sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-teal-400">Free</span> until you are ready to
          launch
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your phone no"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button className="bg-teal-400 text-white hover:bg-teal-500 duration-300 px-5 py-2.5 rounded-md md:w-auto w-full">
            Submit
          </button>
        </div>
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 bg-gray-800 ">
        <span>@ 2024 all rights reserved.</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
}

export default Footer;
