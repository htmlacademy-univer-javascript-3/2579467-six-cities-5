import { Offer } from '../types/types';

export const mockOffersNearby: Offer[] = [
  {
    id: '5e6f7a44-b89c-4123-92cd-f0d562b47f10',
    title: 'Charming studio with a park view',
    type: 'room',
    price: 95,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3959553943508,
        longitude: 4.85709666406198,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3959553943508,
      longitude: 4.85709666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/room.jpg'
  },
  {
    id: '6f8g9h55-c23d-4923-9acd-e1b573c58f11',
    title: 'Comfortable apartment near downtown',
    type: 'apartment',
    price: 130,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3709553943508,
        longitude: 4.84309666406198,
        zoom: 9
      }
    },
    location: {
      latitude: 52.3709553943508,
      longitude: 4.84309666406198,
      zoom: 9
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.7,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '7h9i0j66-d34e-4825-8bcd-f2c683d69f12',
    title: 'Spacious loft with panoramic windows',
    type: 'apartment',
    price: 175,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3859553943508,
        longitude: 4.915309666406198,
        zoom: 9
      }
    },
    location: {
      latitude: 52.3859553943508,
      longitude: 4.915309666406198,
      zoom: 9
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.6,
    previewImage: 'img/apartment-03.jpg'
  }
];
