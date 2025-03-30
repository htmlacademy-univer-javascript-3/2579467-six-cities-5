import { Review } from '../types/types';

export const MockReviews: Review[] = [
  {
    'id': 'f23a4c87-1b5e-4d4b-9b4d-2a9b1e8d5e3c',
    'date': '2020-07-15T10:45:30.123Z',
    'user': {
      'name': 'Daniel Smith',
      'avatarUrl': 'https://avatar.iran.liara.run/public/37',
      'isPro': true
    },
    'comment': 'A charming place with a wonderful atmosphere, perfect for a relaxing getaway.',
    'rating': 5
  },
  {
    'id': 'a98cb6df-6f12-41a2-930c-ef32c46e1a89',
    'date': '2021-09-22T18:30:45.789Z',
    'user': {
      'name': 'Emma Parker',
      'avatarUrl': 'https://avatar.iran.liara.run/public/92',
      'isPro': false
    },
    'comment': 'A cozy spot by the river, offering both tranquility and a touch of magic at sunset.',
    'rating': 5
  },
  {
    'id': 'd45f2c90-83b7-4a2e-88bd-fbd1a134cb8f',
    'date': '2023-03-10T08:20:10.456Z',
    'user': {
      'name': 'Mike Johns',
      'avatarUrl': 'https://avatar.iran.liara.run/public/38',
      'isPro': true
    },
    'comment': 'A hidden gem with a stunning view. The peace and quiet make it an unforgettable experience.',
    'rating': 5
  }
];
