import {createElement} from '../render.js';
import dayjs from 'dayjs';
const humanizeDate = (date) => date ? dayjs(date).format('D MMMM') : '';


const createCommentViewTemplate = (comment) => {
  const {author, commentText, date, emotion} = comment;
  return(
    `<li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-${emotion}">
        </span>
        <div>
          <p class="film-details__comment-text">${commentText}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${humanizeDate(date)}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
       </li>`
  );
};

export default class CommentView {
  constructor(comment) {
    this.comment = comment;
  }

  getTemplate() {
    return createCommentViewTemplate(this.comment);
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
