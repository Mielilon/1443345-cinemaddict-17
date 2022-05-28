import {generateRandomData} from '../utils/common.js';

const descriptions = [
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const titles = [
  'A Little Pony Without The Carpet',
  'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS',
  'CHIP N DALE: RESCUE RANGERS',
  'EVERYTHING EVERYWHERE ALL AT ONCE'
];

const posters = [
  'images/posters/santa-claus-conquers-the-martians.jpg',
  'images/posters/made-for-each-other.png',
  'images/posters/the-great-flamarion.jpg',
  'images/posters/the-man-with-the-golden-arm.jpg'
];

export const generateFilm = () => ({
  id: '0',
  comments: [
    13,
    15,
    12,
  ],
  filmInfo: {
    title: generateRandomData(titles),
    alternativeTitle: 'Laziness Who Sold Themselves',
    totalRating: 5.3,
    poster: generateRandomData(posters),
    ageRating: 0,
    director: 'Tom Ford',
    writers: [
      'Takeshi Kitano',
      'Morgan Freeman',
    ],
    actors: [
      'Morgan Freeman',
      'Erich von Stroheim',
      'Mary Beth Hughes',
      'Dan Duryea'
    ],
    release: {
      date: '2019-05-11T00:00:00.000Z',
      releaseCountry: 'Finland'
    },
    runtime: 77,
    genre: [
      'Comedy',
      'Film-Noir',
      'Drama'
    ],
    description: generateRandomData(descriptions)
  },
  userDetails: {
    watchlist: false,
    alreadyWatched: true,
    watchingDate: '2019-04-12T16:12:32.554Z',
    favorite: true
  }
});
