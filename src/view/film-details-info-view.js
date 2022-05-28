import {createElement} from '../render.js';
import dayjs from 'dayjs';
const humanizeDate = (date) => date ? dayjs(date).format('YYYY') : '';


const createFilmDetailsInfoTemplate = (film) => {
  const {title, alternativeTitle, totalRating, poster,
    director, writers, actors, release, runtime, genre, description} = film.filmInfo;
  return(
    `<div class="film-details__info-wrap">
    <div class="film-details__poster">
      <img class="film-details__poster-img" src=${poster} alt="">
      <p class="film-details__age">18+</p>
    </div>

    <div class="film-details__info">
      <div class="film-details__info-head">
        <div class="film-details__title-wrap">
          <h3 class="film-details__title">${alternativeTitle}</h3>
          <p class="film-details__title-original">Original: ${title}</p>
        </div>

        <div class="film-details__rating">
          <p class="film-details__total-rating">${totalRating}</p>
        </div>
      </div>

      <table class="film-details__table">
        <tr class="film-details__row">
          <td class="film-details__term">Director</td>
          <td class="film-details__cell">${director}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Writers</td>
          <td class="film-details__cell">${writers.join(', ')}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Actors</td>
          <td class="film-details__cell">${actors.join(', ')}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Release Date</td>
          <td class="film-details__cell">${humanizeDate(release.date)}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Runtime</td>
          <td class="film-details__cell">${runtime} m</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Country</td>
          <td class="film-details__cell">${release.releaseCountry}</td>
        </tr>
        <tr class="film-details__row">
          <td class="film-details__term">Genres</td>
          <td class="film-details__cell">
          ${genre.map((genreItem) => (`<span class="film-details__genre">${genreItem}</span>`)).join('')}
          </td>
        </tr>
      </table>

      <p class="film-details__film-description">${description}</p>
    </div>
  </div>`
  );
};

export default class FilmDetailsInfoView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmDetailsInfoTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
