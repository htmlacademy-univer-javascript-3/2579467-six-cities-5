export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFoundPage = '/notFoundPage',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';


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

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const CITIES = [
  {
    name: CityName.Paris,
    location: {
      latitude: 48.8566,
      longitude: 2.3522,
      zoom: 12,
    }
  },
  {
    name: CityName.Cologne,
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 12,
    }
  },
  {
    name: CityName.Brussels,
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 13,
    }
  },
  {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.3709553943508,
      longitude: 4.88309666406198,
      zoom: 13,
    }
  },
  {
    name: CityName.Hamburg,
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 12,
    }
  },
  {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 12,
    }
  }
];

export enum SortName {
  Popular = 'Popular',
  Low_to_high = 'Price: low to high',
  High_to_low = 'Price: high to low',
  Top_rated = 'Top rated first',
}

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Nearby = '/nearby',
  Favorites = '/favorite',
}

