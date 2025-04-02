import { Offer, City } from '../types/types';
import { changeCity, setOffers } from './action';
import { CITYS } from '../const';

import { createReducer } from '@reduxjs/toolkit';

type State = {
  city: City;
  offers: Offer[];
}

const initialState: State = {
  city: CITYS[0],
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
