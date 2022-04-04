import React from 'react';

const ReviewCard = (props) => {
    const {name,img,rating,feedback}=props.info;

    return (
        <div className='bg-stone-50 p-5 rounded-lg drop-shadow-lg'>
            <div className='flex items-center my-5'>
                <img className='w-16 h-16 rounded-full drop-shadow-lg' src={img} alt="" />
                <span className='ml-4 font-medium'>{name}</span>
            </div>
            <p className='mb-5 text-gray-400'>{feedback}</p>
            <span className='font-bold '>Rating: {rating}</span>
        </div>
    );
};

export default ReviewCard;