import React from "react";
// import img from "../../../assets/"

function Notice() {
  return (
    <div className="flex items-center justify-center px-4  max-w-screen-2xl mx-auto min-h-[40vh] h-[40vh] bg-indigo-300">
      <div className="p-4">
        <a
          href="#"
          className="p-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="mb-3 rounded-full shadow-lg object-cover  h-auto w-48 md:rounded-full"
            src="https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              High Madrasah Exam 2022
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
      
    </div>
  );
}

export default Notice;
