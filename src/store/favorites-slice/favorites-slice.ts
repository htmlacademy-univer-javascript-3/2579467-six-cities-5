import { createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/types';
import { fetchFavoritesAction } from '../api-action';

type FavoritesState = {
  favoritesOffers: Offer[];
};

const initialState: FavoritesState = {
  favoritesOffers: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favoritesOffers = action.payload;
      });
  }
});

export default favoritesSlice.reducer;
