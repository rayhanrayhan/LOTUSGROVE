import React from 'react';

const UsersCard = ({ data, index, handleRole }) => {
    const { _id, email, name, photo, role } = data;

    const isEvenRow = index % 2 === 0;
    const rowColorClass = isEvenRow ? "bg-gray-100" : "bg-gray-200";
    return (
        <tr className={`${rowColorClass} border rounded-2xl`}>
            <td className="px-4 py-2  text-center">{index + 1}</td>
            <td className="px-4 py-2">
                <img className="w-12 h-12 rounded-full" src={photo} alt="" />
            </td>
            <td className="px-4 py-2 text-center">{name}</td>
            <td className="px-4 py-2 text-center"> {email}</td>
            <td className="px-4 py-2 text-center">{role}</td>
            <td className="px-4 py-2 text-right">
                <div className="flex gap-3 items-center justify-center">
                    <button disabled={role === 'student' ? false : true} onClick={() => handleRole(_id, 'instructor')} className="">
                        Instructor
                    </button>
                    <button disabled={role === 'student' ? false : true} onClick={() => handleRole(_id, 'admin')} className=" ">
                        Admin
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default UsersCard;