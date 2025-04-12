import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/types';

export const changeCity = createAction<City>('changeCity');
export const setOffers = createAction<Offer[]>('setOffers');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setDataLoadingStatus');
