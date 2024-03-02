import React from "react";
import { StRecords } from "./strecords";

function RecordModal({ activeId, setShoWRecordModal }) {
  console.log("id:", activeId);

  const student = StRecords.find((record) => record.id === activeId);

  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-slate-500 bg-opacity-60">
        <div className="max-w-[600px] absolute top-1/2 right-1/2 bg-white rounded-[8px] transform translate-x-1/2 -translate-y-1/2 p-2">
          <figure>
            <img src={student.imageurl} alt="" />
          </figure>

          <button
            onClick={() => setShoWRecordModal(false)}
            className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
          >
            &times;
          </button>
        </div>
      </div>
    </>
  );
}

export default RecordModal;
