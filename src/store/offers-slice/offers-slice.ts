import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, Offer } from '../../types/types';
import { fetchOffersAction } from '../api-action';
import { CITIES } from '../../const';

type OffersState = {
  offers: Offer[];
  isOffersLoading: boolean;
  city: City;
};

const initialState: OffersState = {
  offers: [],
  isOffersLoading: false,
  city: CITIES[0],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    setOffersLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isOffersLoading = action.payload;
    },
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
      });
  }
});

export const { setOffersLoadingStatus, changeCity } = offersSlice.actions;
export default offersSlice.reducer;
