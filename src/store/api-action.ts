import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AuthData, Offer, UserData, OfferData, Review, Comment } from '../types/types';
import { ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, setAuthorizationStatus, setCurrentOffer, setError, setOfferLoadingStatus, setOffersLoadingStatus, setOffersNearby, setOffersNearbyLoadingStatus, setReviews, setReviewsLoadingStatus, setUserData } from './action.js';
import { dropToken, saveToken } from '../services/token';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offer[]>(ApiRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchOffersNearby = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOffersNearbyLoadingStatus(true));
    const {data} = await api.get<Offer[]>(`${ApiRoute.Offers}/${offerId}${ApiRoute.Nearby}`);
    dispatch(setOffersNearbyLoadingStatus(false));
    dispatch(setOffersNearby(data));
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

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(ApiRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
      dispatch(setUserData(data));
      saveToken(data.token);
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
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
    dispatch(setUserData(null));
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferLoadingStatus(true));
    const {data} = await api.get<OfferData>(`${ApiRoute.Offers}/${offerId}`);
    dispatch(setOfferLoadingStatus(false));
    dispatch(setCurrentOffer(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setReviewsLoadingStatus(true));
    const {data} = await api.get<Review[]>(`${ApiRoute.Comments}/${offerId}`);
    dispatch(setReviewsLoadingStatus(false));
    dispatch(setReviews(data));
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


