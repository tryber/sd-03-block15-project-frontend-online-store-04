import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './Rating.css';
import './Comments.css';

class Comments extends React.Component {

  renderComments() {
    const { storage } = this.props;
    return (
      storage && storage.map((e) => (
        <div className="comment" key={e.email}>
          <p>
            Email:
            {e.email}
          </p>
          <p>
            Mensagem:
            {e.message}
          </p>
          <p>
            Nota:
            <StarRatingComponent
              name="rate1"
              className="stars"
              starCount={5}
              value={e.rating}
              onStarClick={() => this.onStarClick()}
            />
          </p>
        </div>
      )));
  }

  render() {
    const { storage } = this.props;
    if (storage === null || storage.length === 0) {
      return (
        <div className="comment-box">
          <h1>Comentários</h1>
          <p>Sem comentários ainda</p>
        </div>
      );
    }
    return (
      <div className="comment-box">
        <h1>Comentários</h1>
        <div data-testid="product-detail-evaluation">
          {this.renderComments()}
        </div>
      </div>
    );
  }
}

export default Comments;
