import React from 'react';
import { Link } from 'react-router-dom';

const ManageClassCard = ({ singleClass, handleStatus }) => {
    const { _id, name, image, price, seats, students, status } = singleClass;
    return (
        <div className='p-5 border rounded-lg flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
                <img className='w-56' src={image} alt="" />

                <div>
                    <h1 className='text-xl font-semibold'>Name: {name}</h1>
                    <p className='text-sm'>Price: ${price}</p>
                    <p className='text-sm'>Available: {seats}</p>
                    <p className='text-sm'>Enrolled Students: {students}</p>
                    <p className='text-sm border text-center py-1 bg-yellow-200 rounded-lg mt-1 w-48'>Status: {status}</p>
                </div>
            </div>

            <div className='flex flex-col gap-3'>
                <button disabled={status === "approved" || status === "denied" ? true : false} onClick={() => handleStatus(_id, 'approved')} className='border py-1 px-4 rounded-lg bg-lime-500 bg-opacity-30 text-lime-500'>Approved</button>
                <button disabled={status === "approved" || status === "denied" ? true : false} onClick={() => handleStatus(_id, 'denied')} className='border py-1 px-4 rounded-lg bg-red-200 text-red-500'>Deny</button>
                {
                    status !== "pending" ? <Link to={`/feedback/${_id}`} className='border py-1 px-4 rounded-lg bg-indigo-400 text-white'>Feedback</Link> : ''
                }
            </div>
        </div>
    );
};

export default ManageClassCard;