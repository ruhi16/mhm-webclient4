import React from "react";
import CountUp from "react-countup";
import CountUpRecord from "./CountUpRecord";
import { Records } from "./data";

function Home2() {
  return (
    <section className="bg-white dark:bg-gray-900 bg-bgHero1 bg-fixed bg-cover">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Manikchak High Madrasah (H.S)
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Manikchak * Lalgola * Murshidabad
        </p>

        <a
          href="#"
          className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-indigo-300 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Announcement
          
        </a>

        <div className="p-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            {Records.map((record) => (
              <CountUpRecord key={record.title} title={record.title} endData={record.end} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home2;
