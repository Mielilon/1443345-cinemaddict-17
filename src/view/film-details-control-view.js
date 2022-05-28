import {createElement} from '../render.js';

const createFilmDetailsControlTemplate = (film) => {
  const {watchlist: isWatchlist, alreadyWatched: isAlreadyWatched, favorite: isFavorite} = film.userDetails;

  const watchlistClassName = isWatchlist
    ? 'film-details__control-button--watchlist film-details__control-button--active'
    : 'film-details__control-button--watchlist';

  const watchedClassName = isAlreadyWatched
    ? 'film-details__control-button--watched film-details__control-button--active'
    : 'film-details__control-button--watched';

  const favoriteClassName = isFavorite
    ? 'film-details__control-button--favorite film-details__control-button--active'
    : 'film-details__control-button--favorite';

  return(
    `<section class="film-details__controls">
        <button type="button" class="film-details__control-button ${watchlistClassName}" id="watchlist" name="watchlist">${isWatchlist ? 'Add to watchlist' : 'Added to watchlist'}</button>
        <button type="button" class="film-details__control-button ${watchedClassName}" id="watched" name="watched">${isAlreadyWatched ? 'Mark as watched' : 'Already watched'}</button>
        <button type="button" class="film-details__control-button ${favoriteClassName}" id="favorite" name="favorite">${isAlreadyWatched ? 'Mark as favorite' : 'Already in favorites'}</button>
    </section>`
  );
};

export default class FilmDetailsControlView {
  constructor(film) {
    this.film = film;
  }

  getTemplate() {
    return createFilmDetailsControlTemplate(this.film);
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
