import {createElement} from '../render.js';

import dayjs from 'dayjs';
const humanizeDate = (date) => date ? dayjs(date).format('YYYY') : '';

const createFilmTemplate = (film) => {
  const {title, totalRating, poster, release, runtime, genre, description} = film.filmInfo;
  const {watchlist: isWatchlist, alreadyWatched: isAlreadyWatched, favorite: isFavorite} = film.userDetails;

  const watchlistClassName = isWatchlist
    ? 'film-card__controls-item--add-to-watchlist film-card__controls-item--active'
    : 'film-card__controls-item--add-to-watchlist';

  const watchedClassName = isAlreadyWatched
    ? 'film-card__controls-item--mark-as-watched film-card__controls-item--active'
    : 'film-card__controls-item--mark-as-watched';

  const favoriteClassName = isFavorite
    ? 'film-card__controls-item--favorite film-card__controls-item--active'
    : 'film-card__controls-item--favorite';

  return(
    `<article class="film-card">
      <a class="film-card__link">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${totalRating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${humanizeDate(release.date)}</span>
          <span class="film-card__duration">${runtime} m</span>
          <span class="film-card__genre">${genre[0]}</span>
        </p>
        <img src=${poster}  alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <span class="film-card__comments">5 comments</span>
      </a>
      <div class="film-card__controls">
        <button class="film-card__controls-item ${watchlistClassName}" type="button">${isWatchlist ? 'Add to watchlist' : 'Added to watchlist'}</button>
        <button class="film-card__controls-item ${watchedClassName}" type="button">${isAlreadyWatched ? 'Mark as watched' : 'Already watched'}</button>
        <button class="film-card__controls-item ${favoriteClassName}" type="button">${isAlreadyWatched ? 'Mark as favorite' : 'Already in favorites'}</button>
      </div>
    </article>`
  );
};

export default class FilmCardView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmTemplate(this.film);
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
