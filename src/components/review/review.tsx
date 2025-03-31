import { Review } from '../../types/types';
import { formatDateShort, formatDateLong } from '../../helpers';
import { Rating } from '../rating/rating';

type ReviewProps = {
  review: Review;
}

export const ReviewItem = ({ review } : ReviewProps) => {
  const date = new Date(review.date);

  const dateShort = formatDateShort(date);
  const dateLong = formatDateLong(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <Rating rating={review.rating} className="place-card__rating" starsClassName="place-card__stars" />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dateShort}>{dateLong}</time>
      </div>
    </li>
  );
};
