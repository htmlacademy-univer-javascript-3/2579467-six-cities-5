import { GroupedOffersByCity, Offer } from './types/types';

export const formatDateShort = (date: Date) => date.toISOString().split('T')[0];

export const formatDateLong = (date: Date) => date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

export const getFavoritesByCity = (favorites: Offer[]) =>
  favorites.reduce((acc: GroupedOffersByCity, offer) => {
    (acc[offer.city.name] ||= []).push(offer);
    return acc;
  }, {});
