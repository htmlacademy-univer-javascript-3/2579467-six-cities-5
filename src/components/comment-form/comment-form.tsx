import React from 'react';
import { Star } from '../star/star';
import { useParams } from 'react-router-dom';
import { fetchReviewsAction, sendCommentAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks/hooks';

export const CommentForm = (): JSX.Element => {

  const dispatch = useAppDispatch();

  const { id } = useParams<string>();

  const ratingObject = {
    'perfect': 5,
    'good': 4,
    'not bad': 3,
    'bad': 2,
    'terrible': 1,
  };

  const [formData, setFormData] = React.useState({
    rating: 0,
    comment: '',
  });

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (id) {
      dispatch(sendCommentAction({
        offerId: id,
        formData: {
          rating: Number(formData.rating),
          comment: formData.comment,
        },
      })).then(() => {
        dispatch(fetchReviewsAction(id));
        setFormData({ rating: 0, comment: '' });
      });
    }
  };

  const isFormValid = formData.rating !== 0 && formData.comment.length >= 50 && formData.comment.length <= 300;

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(ratingObject).map(([title, value]) =>
            (
              <Star
                key={value}
                title={title}
                value={value}
                onChange={handleFieldChange}
              />
            ))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="comment" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange} value={formData.comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};
