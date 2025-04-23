import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, Offer, UserData, OfferData, Review, Comment } from '../types/types';
import { ApiRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { setError } from './error-slice/error-slice.js';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<Offer[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersNearby',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}${ApiRoute.Nearby}`);
    return data;
  },
);

export const clearErrorAction = createAsyncThunk<void, void, {
  dispatch: AppDispatch;
}>(
  'clearError',
  (_arg, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  }
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoute.Login);
      saveToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(ApiRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(fetchOffersAction());
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
  },
);

export const fetchOfferAction = createAsyncThunk<OfferData, string, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OfferData>(`${ApiRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<void, {offerId: string; formData: Comment}, {
  state: State;
  extra: AxiosInstance;
}>(
  'sendComment',
  async ({ offerId, formData }, { extra: api }) => {
    await api.post<Review[]>(`${ApiRoute.Comments}/${offerId}`, formData);
  }
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${ApiRoute.Favorites}`);
    return data;
  }
);

export const setFavoritesStatusAction = createAsyncThunk<void, {offerId: string; status: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setFavoritesStatus',
  async ({ offerId, status }, {dispatch, extra: api }) => {
    await api.post<Offer>(`${ApiRoute.Favorites}/${offerId}/${status}`, status);
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
  }
);


