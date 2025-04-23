import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './auth-slice/auth-slice';
import favoritesSlice from './favorites-slice/favorites-slice';
import errorSlice from './error-slice/error-slice';
import offersSlice from './offers-slice/offers-slice';
import offerSlice from './offer-slice/offer-slice';
import reviewsSlice from './review-slice/review-slice';

export const rootReducer = combineReducers({
  auth: authSlice,
  offers: offersSlice,
  offer: offerSlice,
  favorites: favoritesSlice,
  reviews: reviewsSlice,
  error: errorSlice,
});
