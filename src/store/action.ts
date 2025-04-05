import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/types';

export const changeCity = createAction<City>('changeCity');
export const setOffers = createAction<Offer[]>('setOffers');
