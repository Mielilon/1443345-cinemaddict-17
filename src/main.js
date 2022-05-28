import ProfileView from './view/profile-view.js';
import NavigationView from './view/navigation-view.js';
import FilterView from './view/filter-view.js';
import {RenderPosition, render} from './render.js';
import FilmDetailsPopupView from './view/film-details-popup-view.js';
import CommentsWrapView from './view/comments-wrap-view.js';

import FilmsPresenter from './presenter/films-presenter.js';
import CommentsPresenter from './presenter/comments-presenter.js';
import FilmDetailsPresenter from './presenter/film-details-presenter.js';

import FilmsModel from './model/films-model.js';
import CommentsModel from './model/comments-model.js';


const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');

const filmDetailsPopup =  new FilmDetailsPopupView();

const filmDetailsPresenter = new FilmDetailsPresenter();
const filmsPresenter = new FilmsPresenter();
const filmsModel = new FilmsModel();

const commentsPresenter = new CommentsPresenter();
const commentsModel = new CommentsModel();

render(new ProfileView(), siteHeaderElement);
render(new NavigationView(), siteMainElement);
render(new FilterView(), siteMainElement);
render(filmDetailsPopup, siteMainElement, RenderPosition.AFTEREND);
render(new CommentsWrapView(), siteMainElement);

const siteFilmDetalsBottom = document.querySelector('.film-details__bottom-container');
const siteFilmDetalsTop = document.querySelector('.film-details__top-container');

filmsPresenter.init(siteMainElement, filmsModel);
filmDetailsPresenter.init(siteFilmDetalsTop, filmsModel);
commentsPresenter.init(siteFilmDetalsBottom, commentsModel);
