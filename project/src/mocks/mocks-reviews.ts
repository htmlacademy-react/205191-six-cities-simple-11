import { ReviewsType } from '../types/types-reviews';

const reviewsMock: ReviewsType = [
  {
    'hotelId': 1,
    'id': 1,
    'user': {
      'id': 11,
      'avatarUrl': 'img/avatar-max.jpg',
      'name': 'Max',
      'isPro': true,
    },
    'rating': 5,
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'date': 'April 2019'
  },
  {
    'hotelId': 2,
    'id': 2,
    'user': {
      'id': 22,
      'avatarUrl': 'img/avatar-max.jpg',
      'name': 'Bob',
      'isPro': false,
    },
    'rating': 3.5,
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'date': 'April 2019'
  },
  {
    'hotelId': 3,
    'id': 3,
    'user': {
      'id': 33,
      'avatarUrl': 'img/avatar-angelina.jpg',
      'name': 'Angelina',
      'isPro': false,
    },
    'rating': 4,
    'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    'date': 'April 2019'
  }
];

export default reviewsMock;
