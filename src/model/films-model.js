import {generateFilm} from '../mock/film.js';

export default class FilmsModel {
  films = Array.from({length: 6}, generateFilm);

  getFilms = () => this.films;
}
