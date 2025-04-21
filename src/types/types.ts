export type City = {
  name: string;
  location: Location;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}


export type Point = {
  title: string;
  location: Location;
}

export type ClassType = {
  favorites: string;
  nearby: string;
  default: string;
}

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type Host = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type OfferData = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: string;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Comment = {
  comment: string;
  rating: number;
}


