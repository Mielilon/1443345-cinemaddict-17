import {createElement} from '../render.js';

const createCommentsWrapTemplate = (commentsAmount) => (`
        <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsAmount}</span></h3>
          <ul class="film-details__comments-list"></ul>
        </section>`);

export default class CommentsWrap {
  constructor(сommentsWrap) {
    this.сommentsWrap = сommentsWrap;
  }

  getTemplate() {
    return createCommentsWrapTemplate(this.сommentsWrap);
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
