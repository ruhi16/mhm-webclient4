import React, { useState, useEffect } from "react";
import { StRecords } from "./strecords";
import RecordModal from "./RecordModal";

function StudentRecords() {
  const [nextItem, setNextItem] = useState(3);
  const [records, setRecords] = useState(StRecords);
  const [selectTab, setSelectTab] = useState("all");

  const [showRecordModal, setShoWRecordModal] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const loadMoreHandler = () => {
    setNextItem((prev) => prev + 3);
  };

  const showModalHandler = (id) => {
    console.log("modal handler:", id);
    setActiveId(id);
    setShoWRecordModal(true);
    
  };

  useEffect(() => {
    if (selectTab === "all") {
      setRecords(StRecords);
    }

    if (selectTab === "hs") {
      const hsrecords = StRecords.filter((item) => item.category === "hs");
      setRecords(hsrecords);
    }

    if (selectTab === "hm") {
      const hmrecords = StRecords.filter((item) => item.category === "hm");
      setRecords(hmrecords);
    }

    if (selectTab === "cl") {
      const clrecords = StRecords.filter((item) => item.category === "cl");
      setRecords(clrecords);
    }
  }, [selectTab]);

  return (
    <>
      <section id="studentrecords">
        <div className="container p-4 ">
          <div className="flex items-center justify-between flex-wrap">
            <div className="mb-7 sm:mb-0">
              <h3 className="text-indigo-500 text-[2rem] font-[700]">
                Student's Records - {showRecordModal}
              </h3>
            </div>
            <div className="flex gap-3 ">
              <button
                onClick={() => setSelectTab("all")}
                className={`${
                  selectTab === "all" ? "bg-amber-700" : "bg-amber-500"
                }  hover:bg-amber-700 text-white py-2 px-4 rounded`}
              >
                All
              </button>
              <button
                onClick={() => setSelectTab("hs")}
                className={`${
                  selectTab === "hs" ? "bg-amber-700" : "bg-amber-500"
                }  hover:bg-amber-700 text-white py-2 px-4 rounded`}
              >
                Higher Secondary
              </button>
              <button
                onClick={() => setSelectTab("hm")}
                className={`${
                  selectTab === "hm" ? "bg-amber-700" : "bg-amber-500"
                }  hover:bg-amber-700 text-white py-2 px-4 rounded`}
              >
                High Madrasah
              </button>
              <button
                onClick={() => setSelectTab("cl")}
                className={`${
                  selectTab === "cl" ? "bg-amber-700" : "bg-amber-500"
                }  hover:bg-amber-700 text-white py-2 px-4 rounded`}
              >
                Class
              </button>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            className="flex items-center gap-4 flex-wrap mt-12 bg-slate-200 justify-center"
          >
            {records.map((record) => (
              <div key={record.id} className="group max-w-full sm:w-[48.5%] md:w-[38.8%] lg:w-[32.2%] relative z-[1]">
                {/* <h1>{record.name}</h1> */}
                <figure>
                  <img
                    className="rounded-[8px]"
                    src={record.imageurl}
                    alt="na"
                  />
                </figure>

                <div className="w-full h-full bg-indigo-500  bg-opacity-50 absolute top-0 left-0 z-[5] hidden group-hover:block font-[500] ease-in duration-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <button
                      onClick={() => showModalHandler(record.id)}
                      className="text-white bg-slate-700 hover:bg-slate-900 py-2 px-2 rounded-[8px] "
                    >
                      See Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            {nextItem < records.length && StRecords.length > 6 && (
              <button
                onClick={loadMoreHandler}
                className="text-white bg-slate-500 hover:bg-slate-700 py-2 px-4 rounded-[8px]"
              >
                Load More
              </button>
            )}
          </div>
        </div>

        {showRecordModal && <RecordModal activeId={activeId} setShoWRecordModal={setShoWRecordModal}/>}

      </section>
    </>
  );
}

export default StudentRecords;
