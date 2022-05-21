import {createElement} from '../render.js';


export default class FilmsListExtraView {
  getTemplate() {
    return (
      `<section class="films-list films-list--extra">
        <h2 class="films-list__title">Most commented</h2>
      </section>`);
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
