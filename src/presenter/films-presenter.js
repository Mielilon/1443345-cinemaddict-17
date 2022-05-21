import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmCardView from '../view/film-card-view.js';
import FilmsListExtraView from '../view/films-list-extra-view.js';
import ShowMoreButtonView from '../view/show-more-films-button.js';
import FilmsListContainerView from '../view/films-list-container.js';
import {render} from '../render.js';

export default class FilmsPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListExtraView = new FilmsListExtraView();

  mainFilmsContainer = new FilmsListContainerView();

  init = (filmsContainer) => {
    this.filmsContainer = filmsContainer;

    render(this.filmsComponent, this.filmsContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());

    for (let i = 0; i < 5; i++) {
      render(new FilmCardView(), this.mainFilmsContainer.getElement());
    }
    render(this.mainFilmsContainer, this.filmsListComponent.getElement());
    render(new ShowMoreButtonView(), this.filmsListComponent.getElement());

    for (let i = 0; i < 2; i++) {
      const filmsList = new FilmsListExtraView();
      const filmListContainer = new FilmsListContainerView();

      render(filmsList, this.filmsComponent.getElement());
      render(filmListContainer, filmsList.element);


      for(let a = 0; a < 2; a++) {
        render(new FilmCardView(), filmListContainer.element);
      }
    }
  };
}
