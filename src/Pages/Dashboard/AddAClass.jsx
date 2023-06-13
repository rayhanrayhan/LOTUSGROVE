import React, { useContext } from 'react';
import KeenSlider from '../KeenSlider/KeenSlider';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import axios from 'axios';

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm
        ();
    const onSubmit = data => {
        const newClass = { ...data, status: 'pending', students: 0 }
        console.log(newClass)
        axios.post('http://localhost:5000/classes', newClass)
            .then(data => {
                console.log(data.data)
            })
    };
    return (
        <div>
            <Helmet>
                <title>LOTUSGROVE || DASHBOARD - Add A Class</title>
            </Helmet>
            <KeenSlider keenTitle="Add A Class" />

            <div className='mt-10 py-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex items-center gap-3'>
                        <input className='border w-full text-black py-2 px-3 rounded-lg' placeholder='Class Name' {...register("name", { required: true })} />

                        <input className='border w-full text-black py-2 px-3 rounded-lg' readOnly defaultValue={user?.displayName} {...register("instructor", { required: true })} />

                        <input className='border w-full text-black py-2 px-3 rounded-lg' readOnly defaultValue={user?.email} {...register("email", { required: true })} />
                    </div>

                    <input className='border w-full text-black py-2 px-3 rounded-lg mt-3' defaultValue={user?.photoURL} {...register("instructorImage", { required: true })} />



                    <textarea rows={4} className='border w-full text-black py-2 px-3 rounded-lg mt-3' placeholder="Class description" {...register("des", { required: true })} />

                    <div className='flex items-center gap-3 mt-3'>
                        <input className='border w-full text-black py-2 px-3 rounded-lg' placeholder='Class price' {...register("price", { required: true })} />

                        <input className='border w-full text-black py-2 px-3 rounded-lg' placeholder='Available seats' {...register("seats", { required: true })} />

                        <input className='py-2 px-8 text-white rounded-lg bg-indigo-400' type="submit" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddAClass;