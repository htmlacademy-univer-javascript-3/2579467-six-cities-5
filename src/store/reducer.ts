import { Offer, City, UserData, OfferData, Review } from '../types/types';
import { changeCity, setOffers, loadOffers, setError, setOffersLoadingStatus, setAuthorizationStatus, setUserData, setCurrentOffer, setReviews, setOffersNearby, setOfferLoadingStatus, setReviewsLoadingStatus, setOffersNearbyLoadingStatus } from './action';
import { AuthorizationStatus, CITIES } from '../const';

import { createReducer } from '@reduxjs/toolkit';

type State = {
  city: City;
  offers: Offer[];
  error: string | null;
  isOffersLoading: boolean;
  isCurrentOfferLoading: boolean;
  isReviewsLoadng: boolean;
  isOffersNearbyLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  currentOffer: OfferData | null;
  reviews: Review[];
  offersNearby: Offer[];
}

const initialState: State = {
  city: CITIES[0],
  offers: [],
  error: null,
  isOffersLoading: false,
  isCurrentOfferLoading: false,
  isReviewsLoadng: false,
  isOffersNearbyLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  currentOffer: null,
  reviews: [],
  offersNearby: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(setOfferLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setReviewsLoadingStatus, (state, action) => {
      state.isReviewsLoadng = action.payload;
    })
    .addCase(setOffersNearbyLoadingStatus, (state, action) => {
      state.isCurrentOfferLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    });
});
