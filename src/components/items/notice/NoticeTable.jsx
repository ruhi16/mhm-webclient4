import React from "react";
import {Notices} from './Notices'
import NoticeTableItem from "./NoticeTableItem";


function NoticeTable() {


  return (
    <>
      <div className="mx-auto w-full bg-teal-50 m-4 p-8 rounded-2xl">
        <div className="w-full mx-auto p-4">
        <h1 className="max-w-full mb-4 text-2xl text-center font-semibold tracking-tight leading-none md:text-4xl xl:text-6xl dark:text-white">
              Notice Board
            </h1>
        </div>
        <div className="border border-gray-200 rounded-lg shadow ">
          <div className="overflow-x-auto">
            <table className="table table-sm">
              <thead>
                <tr className="text-blue-500 font-bold text-sm">
                  <th></th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Focus</th>
                  <th>Status</th>
                  <th>Action</th>                  
                </tr>
              </thead>
              <tbody>
                {
                  Notices.map((notice)=>(
                    <NoticeTableItem key={notice.id} rowItem={notice}/>
                  ))
                }
                </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Focus</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default NoticeTable;
