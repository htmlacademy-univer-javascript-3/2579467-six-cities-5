import { Offer, City } from '../types/types';
import { changeCity, setOffers, loadOffers, setError, setDataLoadingStatus } from './action';
import { CITIES } from '../const';

import { createReducer } from '@reduxjs/toolkit';

type State = {
  city: City;
  offers: Offer[];
  error: string | null;
  isDataLoading: boolean;
}

const initialState: State = {
  city: CITIES[0],
  offers: [],
  error: null,
  isDataLoading: false,
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
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });

});
