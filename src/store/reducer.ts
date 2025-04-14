import { Offer, City, UserData } from '../types/types';
import { changeCity, setOffers, loadOffers, setError, setOffersLoadingStatus, setAuthorizationStatus, setUserData } from './action';
import { AuthorizationStatus, CITIES } from '../const';

import { createReducer } from '@reduxjs/toolkit';

type State = {
  city: City;
  offers: Offer[];
  error: string | null;
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
}

const initialState: State = {
  city: CITIES[0],
  offers: [],
  error: null,
  isOffersLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
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
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    });
});
