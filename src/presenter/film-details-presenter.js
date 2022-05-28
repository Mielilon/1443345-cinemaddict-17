import FilmDetailsInfoView from '../view/film-details-info-view.js';
import FilmDetailsControlView from '../view/film-details-control-view.js';

import {render} from '../render.js';

export default class FilmsPresenter {

  init = (siteFilmDetalsBottom, filmsModel) => {
    this.siteFilmDetalsBottom = siteFilmDetalsBottom;
    this.filmsModel = filmsModel;
    this.films = [...this.filmsModel.getFilms()];

    render(new FilmDetailsInfoView(this.films[1]), this.siteFilmDetalsBottom);
    render(new FilmDetailsControlView(this.films[1]), this.siteFilmDetalsBottom);
  };
}
