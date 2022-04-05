import useReview from '../../FakeReview/useReview';
import ReviewCard from '../ReviewCard/ReviewCard';

const AllReview = () => {
    const [reviews, setReviews] = useReview({});
    return (
        <div className='container mx-auto my-10'>
            <div  className='grid md:grid-cols-3 gap-8 sm:grid-cols-1 mx-5'>
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