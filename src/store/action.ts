import { createAction } from '@reduxjs/toolkit';
import { City, Offer, UserData } from '../types/types';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<City>('changeCity');
export const setOffers = createAction<Offer[]>('setOffers');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setDataLoadingStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const setUserData = createAction<UserData | null>('setUser');
