import { CommentForm } from '../../components/comment-form/comment-form';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { OffersList } from '../../components/offers-list/offers-list';
import { Map } from '../../components/map/map';
import { useEffect, useMemo } from 'react';
import { Header } from '../../components/header/header';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchOfferAction, fetchOffersNearby, fetchReviewsAction } from '../../store/api-action';
import { AppRoute, AuthorizationStatus } from '../../const';
import { LoadingPreview } from '../../components/loading-preview/loading-preview';


export const OfferPage = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams<string>();


  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchReviewsAction(id));
      dispatch(fetchOffersNearby(id));
    }
  }, [dispatch, id]);

  const offers = useAppSelector((state) => state.offers.offers);
  const isOfferLoading = useAppSelector((state) => state.offer.isCurrentOfferLoading);
  const isReviewsLoading = useAppSelector((state) => state.reviews.isReviewsLoadng);
  const isOffersNearbyLoading = useAppSelector((state) => state.offer.isOffersNearbyLoading);
  const currentOfferData = useAppSelector((state) => state.offer.currentOffer);
  const currentOffer = useMemo(() => {
    if (offers.length > 0) {
      return offers.find((offer) => id === offer.id);
    }
  }, [offers, id]);

  const reviews = useAppSelector((state) => state.reviews.reviews);
  const offersNearby = useAppSelector((state) => state.offer.offersNearby);

  const authorizationStatus = useAppSelector((state) => state.auth.authorizationStatus);

  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  useEffect(() => {
    if (!currentOffer) {
      navigate(AppRoute.NotFoundPage);
    }
  }, [currentOffer, navigate]);


  return (
    <div className="page">
      <Header/>
      {isOfferLoading ? <LoadingPreview/> :
        <main className="page__main page__main--offer">
          <section className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {currentOfferData?.images.map((image) =>(<div className="offer__image-wrapper" key={image}><img className="offer__image" src={image} alt="Photo studio"/></div>))}
              </div>
            </div>
            <div className="offer__container container">
              <div className="offer__wrapper">
                {currentOfferData?.isPremium && <div className="offer__mark"><span>Premium</span></div>}
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {currentOfferData?.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currentOfferData?.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {currentOfferData?.type}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {currentOfferData?.bedrooms} Bedrooms
                  </li>
                  <li className="offer__feature offer__feature--adults">
                      Max {currentOfferData?.maxAdults} adults
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">&euro;{currentOfferData?.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {currentOfferData?.goods.map((good) =>(<li className="offer__inside-item" key={good}>{good}</li>))}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="offer__avatar user__avatar" src={currentOfferData?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                    </div>
                    <span className="offer__user-name">
                      {currentOfferData?.host.name}
                    </span>
                    {currentOfferData?.host.isPro && <span className="offer__user-status">Pro</span>}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {currentOfferData?.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  {isReviewsLoading ? <LoadingPreview/> : <ReviewsList reviews={reviews}/>}
                  {isAuthorized && <CommentForm/>}
                </section>
              </div>
            </div>

            {isOffersNearbyLoading ? <LoadingPreview/> :
              <section className="offer__map map">
                {currentOffer && offersNearby.length > 0 && <Map city={offersNearby[0].city} points={[...offersNearby.slice(0, 3), currentOffer]} selectedPoint={currentOffer}/>}
              </section>}

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              {isOffersNearbyLoading ? <LoadingPreview/> :
                <OffersList
                  offers={offersNearby.slice(0,3)}
                  variant='nearby'
                />}
            </section>
          </div>
        </main>}
    </div>
  );

};
