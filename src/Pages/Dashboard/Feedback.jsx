import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import KeenSlider from '../KeenSlider/KeenSlider';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Feedback = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.patch(`http://localhost:5000/feedback/${id}`, data)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    alert('feedback send')
                    navigate('/dashboard/manegeClasses')
                }
            })
    };
    return (
        <div>
            <Helmet>
                <title>LOTUSGROVE || Feedback</title>
            </Helmet>
            <KeenSlider keenTitle="Feedback" />
            <div className='h-96 flex items-center justify-center'>
                <div className='w-96'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                        <textarea placeholder='Write feedback' className='w-full border rounded-lg p-4' rows={5} {...register("feedback", { required: true })} />
                        {errors.feedback && <span>This field is required</span>}

                        <button className='py-2 border w-full rounded-lg mt-4  bg-indigo-400 text-white' type="submit"> Send Feedback</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Feedback;