import { Link } from 'react-router-dom';
import { Offers } from '../../types/types';

type CardProps = {
  offer: Offers;
  variant?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export const Card = ({ offer, variant = 'default', onMouseEnter, onMouseLeave}: CardProps): JSX.Element => {

  const isFavorites = variant === 'favorites';
  const cardClass = isFavorites ? 'favorites__card' : 'cities__card';
  const imageWrapperClass = isFavorites ? 'favorites__image-wrapper' : 'cities__image-wrapper';
  const cardInfoClass = isFavorites ? 'favorites__card-info' : 'place-card__info';
  const imageSize = isFavorites ? { width: 150, height: 110 } : { width: 260, height: 200 };

  return (
    <article
      className={`${cardClass} place-card`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${imageWrapperClass} place-card__image-wrapper`}>
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={offer.title}
          />
        </Link>
      </div>
      <div className={cardInfoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/ night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${offer.rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};
