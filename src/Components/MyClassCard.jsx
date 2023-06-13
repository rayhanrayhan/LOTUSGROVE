import React from "react";
import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const MyClassCard = ({ data, index }) => {
  const { _id, email, classId, name, status, image, price, seats } = data;

  const isEvenRow = index % 2 === 0;
  const rowColorClass = isEvenRow ? "bg-gray-100" : "bg-gray-200";
  return (
    <tr key={classId} className={`${rowColorClass} border rounded-2xl`}>
      <td className="px-4 py-2  text-center">{index + 1}</td>
      <td className="px-4 py-2">
        <img className="w-12 h-12 rounded-full" src={image} alt="" />
      </td>
      <td className="px-4 py-2 text-center">{name}</td>
      <td className="px-4 py-2 text-center"> {status}</td>
      <td className="px-4 py-2 text-center">{seats}</td>
      <td className="px-4 py-2 text-center">FEEDBACK</td>
      <td className="px-4 py-2 text-center">
        <div className=" ">
          <button className="btn btn-circle ">
            <AiFillEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyClassCard;
