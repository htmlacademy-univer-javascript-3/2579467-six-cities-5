import { createAction } from '@reduxjs/toolkit';
import { City, Offer, OfferData, UserData, Review } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<City>('changeCity');
export const setOffers = createAction<Offer[]>('setOffers');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const setUserData = createAction<UserData | null>('setUser');
export const setCurrentOffer = createAction<OfferData>('setCurrentOffer');
export const setReviews = createAction<Review[]>('setReviews');
export const setOffersNearby = createAction<Offer[]>('setOffersNearby');
