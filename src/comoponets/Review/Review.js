import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../FakeReview/useReview';
import BestReview from '../BestReview/BestReview';

const Review = () => {
    const [reviews,setReviews]=useReview({})
    return (
        <div className='text-center container mx-auto'>
            <h1 className='text-3xl font-bold
            my-5'>Customars Review</h1>
            <div  className='grid grid-cols-3 gap-8 my-5'>
            {
                reviews.slice(0,3).map(review=><BestReview 
                    key={review.id}
                    feedback={review}
                ></BestReview>
                    )
            }
            </div>

            <Link to='/reviews' className='my-5 font-bold bg-amber-200 px-5 py-3 rounded-lg'>See All Reviews</Link>
        </div>
    );
};

export default Review;