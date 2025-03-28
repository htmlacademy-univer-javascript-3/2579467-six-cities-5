import { Offer } from '../types/types';

export const mockOffers: Offer[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2b7e6f11-4c2d-4923-8acd-e0a462b27f01',
    title: 'Cozy house with a beautiful garden',
    type: 'house',
    price: 250,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 10
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '3c8d7e22-d56a-4825-9bcd-f1c372a27f02',
    title: 'Modern loft in the city center',
    type: 'loft',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 9
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 9
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4d9f8e33-e67b-4926-8cde-a2b582c37f03',
    title: 'Spacious villa near the beach',
    type: 'villa',
    price: 400,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 9
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 9
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    previewImage: 'img/apartment-01.jpg'
  }
];
