import { Review } from '../../types/types';
import { ReviewItem } from '../review/review';

type ReviewListProps = {
  reviews: Review[];
}

export const ReviewsList = ({reviews} : ReviewListProps) => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem
        key={review.id}
        review={review}
      />
    ))}
  </ul>
);
