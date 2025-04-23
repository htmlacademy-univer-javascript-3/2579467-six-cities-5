import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Review } from '../../types/types';
import { fetchReviewsAction } from '../api-action';

type ReviewsState = {
  reviews: Review[];
  isReviewsLoadng: boolean;
};

const initialState: ReviewsState = {
  reviews: [],
  isReviewsLoadng: false,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isReviewsLoadng = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.isReviewsLoadng = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isReviewsLoadng = false;
      });
  }
});

export default reviewsSlice.reducer;
