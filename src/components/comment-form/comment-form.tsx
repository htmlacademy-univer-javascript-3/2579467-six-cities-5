import React from 'react';
import { Star } from '../star/star';

export const CommentForm = (): JSX.Element => {
  const ratingObject = {
    'perfect': 5,
    'good': 4,
    'not bad': 3,
    'bad': 2,
    'terrible': 1,
  };

  const [formData, setFormData] = React.useState({
    rating: '',
    review: '',
  });

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.keys(ratingObject).map((rating) => {
            const key = rating as keyof typeof ratingObject;
            return (<Star key={ratingObject[key]} title={rating} value={ratingObject[key]} onChange={handleFieldChange}/>);
          })
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange} value={formData.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
};
