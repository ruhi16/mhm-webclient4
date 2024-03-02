import React from "react";

function NoticeTableItem({ rowItem }) {
  return (
    <>
      <tr>
        <th>{rowItem.id}</th>
        <td className="font-bold">{rowItem.title}</td>
        <td>{rowItem.description}</td>
        <td>{rowItem.dtpublish}</td>
        <td>{rowItem.for}</td>
        <td>{rowItem.status}</td>
        <td>Download</td>
      </tr>
    </>
  );
}

export default NoticeTableItem;
