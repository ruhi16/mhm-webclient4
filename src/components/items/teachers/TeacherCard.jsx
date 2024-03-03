import React from "react";

import { SlSocialFacebook, SlSocialTwitter, SlSocialInstagram, SlSocialReddit, SlSocialYoutube   } from "react-icons/sl";



// import {prof} from "../../../assets/edu1.png";

function TeacherCard({ teacher }) {
  return (
    <>
      <div className="container p-4">
        <div className="card w-48 lg:w-72 mx-auto  border border-gray-200 shadow-md rounded-4xl px-4 py-5 m-auto gap-4">
          <div>
            <img
              src={teacher.imgurl}
              alt=""
              className="w-32 h-32 mx-auto rounded-full border-8 border-white "
            />
          </div>
          <div>
            <div className="text-center text-xl font-bold">
              <h3>{teacher.name}</h3>
            </div>
            <div className="text-center text-sm ">
              <h3>Computer Science</h3>
            </div>
          </div>
          <div className="py-2">
            <hr className="w-full" />
          </div>
          <div className="text-center text-xl font-semibold flex flex-wrap items-center gap-4 justify-center">
            
            <a
              className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              aria-label="Twitter"
              href="#"
            ><SlSocialFacebook size={20} />  </a>
            <a
              className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              aria-label="Instagram"
              href="#"
            ><SlSocialInstagram size={20} />  </a>
            <a
              className="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              aria-label="Facebook"
              href="#"
            ><SlSocialYoutube size={20} />  </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherCard;
