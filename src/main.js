import ProfileView from './view/profile-view.js';
import NavigationView from './view/navigation-view.js';
import FilterView from './view/filter-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';

const siteMainElement = document.querySelector('.main');
const siteHeaderElement = document.querySelector('.header');
const filmsPresenter = new FilmsPresenter();

render(new ProfileView(), siteHeaderElement);
render(new NavigationView(), siteMainElement);
render(new FilterView(), siteMainElement);

filmsPresenter.init(siteMainElement);


