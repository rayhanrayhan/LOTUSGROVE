import React from "react";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

const DashBoardData = ({ data, handleDelete, index }) => {
  const { _id, email, classId, name, image, price, seats } = data;

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
        <div className="flex gap-2">
          <button className="btn btn-circle ">
            <MdPayment />
          </button>

          <button onClick={() => handleDelete(_id)} className="btn btn-circle ">
            <AiOutlineDelete />
          </button>
        </div>
      </td>
    </tr>
  );
};
export default DashBoardData;
