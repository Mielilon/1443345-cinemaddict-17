import {generateRandomData} from '../utils/common.js';

const comments = [
  'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const authors = [
  'Without Carpet',
  'Santa Claus',
  'Great Flamarion',
  'Golden Arm'
];

const emotions = [
  'smile',
  'sleeping',
  'puke',
  'angry'
];
const idList = [
  13,
  15,
  12,
  63,
  16,
  41
];

export const generateComment = () => ({
  id: generateRandomData(idList),
  author: generateRandomData(authors),
  commentText: generateRandomData(comments),
  date: '2019-05-11T16:12:32.554Z',
  emotion: generateRandomData(emotions)
});
