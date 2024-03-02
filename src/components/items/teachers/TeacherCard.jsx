import React from "react";

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
          {/* <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center">
            <CheckIcon className='w-6'/>
          </div> */}
          <a
                    class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Twitter"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5"
                    >
                      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                    </svg>
                  </a>
                  <a
                    class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Instagram"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5"
                    >
                      <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                      <path d="M16.5 7.5l0 .01"></path>
                    </svg>
                  </a>
                  <a
                    class="text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    aria-label="Facebook"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-5 w-5"
                    >
                      <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                    </svg>
                  </a>
        </div>
      </div>
    </div>
    </>
  );
}

export default TeacherCard;
