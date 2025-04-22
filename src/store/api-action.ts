import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, Offer, UserData, OfferData, Review, Comment } from '../types/types';
import { ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { dropToken, saveToken } from '../services/token';
import { setOffersLoadingStatus } from './offers-slice/offers-slice.js';
import { setOffersNearbyLoadingStatus } from './offer-slice/offer-slice.js';
import { setError } from './error-slice/error-slice.js';
import { setAuthorizationStatus } from './auth-slice/auth-slice.js';
import { setUserData } from './auth-slice/auth-slice.js';
import { setOfferLoadingStatus } from './offer-slice/offer-slice.js';
import { setReviewsLoadingStatus } from './review-slice/review-slice.js';

export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    return data;
  },
);

export const fetchOffersNearby = createAsyncThunk<Offer[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffersNearby',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersNearbyLoadingStatus(true));
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}${ApiRoute.Nearby}`);
    dispatch(setOffersNearbyLoadingStatus(false));
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
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      saveToken(data.token);
      return data;
    } catch (error) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUserData(data));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferAction = createAsyncThunk<OfferData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));
    const {data} = await api.get<OfferData>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setOfferLoadingStatus(false));
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
    dispatch(setReviewsLoadingStatus(false));
    return data;
  }
);

export const sendCommentAction = createAsyncThunk<void, {offerId: string; formData: Comment}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'sendComment',
  async ({ offerId, formData }, { extra: api }) => {
    await api.post<Review[]>(`${ApiRoute.Comments}/${offerId}`, formData);
  }
);

export const fetchFavoritesAction = createAsyncThunk<Offer[], undefined, {
  dispatch: AppDispatch;
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


