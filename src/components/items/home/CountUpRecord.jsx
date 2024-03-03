import React from "react";

import CountUp from "react-countup";

function CountUpRecord({ title, endData }) {
  return (
    <>
      <div className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
        <span className="font-semibold text-gray-500 uppercase">{title}</span>
        <div className="font-bold text-2xl text-blue-500">
          <CountUp start={0} end={endData} delay={0} suffix="+">
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </>
  );
}

export default CountUpRecord;
