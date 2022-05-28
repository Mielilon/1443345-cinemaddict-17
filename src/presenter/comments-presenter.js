import CommentsWrapView from '../view/comments-wrap-view.js';
import CommentView from '../view/comment-view.js';
import NewCommentView from '../view/new-comment-view.js';
import {render} from '../render.js';

export default class CommentsPresenter {

  init = (siteFilmDetalsBottom, commentsModel) => {

    this.commentsModel = commentsModel;
    this.comments = [...this.commentsModel.getComments()];

    this.siteFilmDetalsBottom = siteFilmDetalsBottom;

    render(new CommentsWrapView(this.comments.length), this.siteFilmDetalsBottom);

    const commentsList = this.siteFilmDetalsBottom.querySelector('.film-details__comments-list');

    for (let i = 0; i < this.comments.length; i++) {
      render(new CommentView(this.comments[i]), commentsList);
    }
    render(new NewCommentView(), commentsList);
  };
}
