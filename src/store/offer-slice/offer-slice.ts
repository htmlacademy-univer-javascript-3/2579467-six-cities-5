import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer, OfferData } from '../../types/types';
import { fetchOfferAction, fetchOffersNearby } from '../api-action';

type OfferState = {
  currentOffer: OfferData | null;
  isCurrentOfferLoading: boolean;
  offersNearby: Offer[];
  isOffersNearbyLoading: boolean;
};

const initialState: OfferState = {
  currentOffer: null,
  isCurrentOfferLoading: false,
  offersNearby: [],
  isOffersNearbyLoading: false,
};

const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action: PayloadAction<OfferData>) => {
        state.isCurrentOfferLoading = false;
        state.currentOffer = action.payload;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchOffersNearby.pending, (state) => {
        state.isOffersNearbyLoading = true;
      })
      .addCase(fetchOffersNearby.fulfilled, (state, action: PayloadAction<Offer[]>) => {
        state.isOffersNearbyLoading = false;
        state.offersNearby = action.payload;
      })
      .addCase(fetchOffersNearby.rejected, (state) => {
        state.isOffersNearbyLoading = false;
      });
  }
});

export default offerSlice.reducer;
