import React, { useState } from "react";
import Button from "../../utilcomponents/Button";

import { Link } from "react-scroll";

import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

function Navbar() {
  let links = [
    { name: "Home", link: "home" },
    { name: "Notice", link: "notice" },
    { name: "School", link: "school" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  let [open, setOpen] = useState(false);

  const handChange = () => {
    setOpen(!open);
  };

  const closeChange = () => {
    setOpen(false);
  };

  return (
    <div>
      <nav className=" w-full bg-slate-500 p-5 shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <div >
                            Logo
                        </div> */}
            <div className="font-bold text-2xl cursor-pointer text-gray-800">
              Manikchak High Madrasah(H.S)
            </div>
          </div>

          <div className="hidden  md:flex md:items-center md:justify-end md:gap-4">
            <div>
              <ul className="flex flex-row items-center gap-2">
                {links.map((link) => (
                  <li key={link.name} className="">
                    <Link
                      to={link.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="hover:text-slate-700 transition-all cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button>Login</Button>
              {/* <Button>Register</Button> */}
            </div>
          </div>

          <div className="md:hidden">
            {open ? (
              <AiOutlineClose size={25} onClick={handChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handChange} />
            )}
          </div>
        </div>
      </nav>
      <div
        className={`${open ? "translate-y-0" : "-translate-x-full"} 
                md:hidden flex flex-col absolute bg-black text-white left-0 top-30 font-semibold text-2xl text-center pt-8 pb-4 gap-8 
                w-full h-fit transition-transform duration-300 `}
      >
        <ul className="flex flex-col items-center gap-2">
          {links.map((link) => (
            <li key={link.name} className="">
              <Link
                to={link.link}
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-slate-700 transition-all cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    to="school"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="hover:text-brightColor transition-all cursor-pointer"
                >
                    Dishes
                </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
