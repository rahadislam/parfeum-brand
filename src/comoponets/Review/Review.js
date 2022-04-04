import React from 'react';
import { Link } from 'react-router-dom';

const Review = () => {
    return (
        <div className='text-center '>
            <h1 className='text-3xl font-bold
            my-5'>Customars Review </h1>
            <Link to='/reviews' className='my-5 font-bold bg-amber-200 px-5 py-3 rounded-lg'>See All Reviews</Link>
        </div>
    );
};

export default Review;