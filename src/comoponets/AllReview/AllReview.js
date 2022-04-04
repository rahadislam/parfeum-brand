import useReview from '../../FakeReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const AllReview = () => {
    const [reviews, setReviews] = useReview({});
    return (
        <div className='container mx-auto my-10'>
            <div  className='grid grid-cols-3 gap-8'>
                {
                    reviews.map(review => <ReviewCard
                        key={review.id}
                        info={review}

                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;