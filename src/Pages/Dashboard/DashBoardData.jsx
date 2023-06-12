import React from "react";
import { Link } from "react-router-dom";

const DashBoardData = ({ data, index }) => {
  const { email, classId, name, image, price, seats } = data;

  const isEvenRow = index % 2 === 0;
  const rowColorClass = isEvenRow ? "bg-gray-100" : "bg-gray-200";

  return (
    <tr key={classId} className={`${rowColorClass} border rounded-2xl`}>
      <td className="px-4 py-2">{index + 1}</td>
      <td className="px-4 py-2">{name}</td>
      <td className="px-4 py-2">
        <img className="w-12 h-12 rounded-full" src={image} alt="" />
      </td>
      <td className="px-4 py-2">{email}</td>
      <td className="px-4 py-2">{seats}</td>
      <td className="px-4 py-2">{price}</td>
      <td className="px-4 py-2">
        <div className="flex-none">
          <button className="btn btn-circle btn-outline">X</button>

          <button className="btn btn-circle btn-outline"></button>
        </div>
      </td>
    </tr>
  );
};
export default DashBoardData;
