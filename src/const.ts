export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const CURRENT_CITY = {
  title: 'Amsterdam',
  location: {
    latitude: 52.3709553943508,
    longitude: 4.88309666406198,
    zoom: 12,
  }
};

export const CARD_CLASS = {
  favorites: 'favorites__card',
  nearby: 'near-places__card',
  default: 'cities__card',
};

export const IMAGE_WRAPPER_CLASS = {
  favorites: 'favorites__image-wrapper',
  nearby: 'near-places__image-wrapper',
  default: 'cities__image-wrapper',
};

export const CARD_INFO_CLASS = {
  favorites: 'favorites__card-info',
  nearby: 'place-card__info',
  default: 'place-card__info',
};

export const OFFERS_LIST_CLASS = {
  favorites: 'favorites__places',
  nearby: 'near-places__list places__list',
  default: 'cities__places-list places__list tabs__content',
};

