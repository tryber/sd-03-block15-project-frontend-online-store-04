import StarRatingComponent from 'react-star-rating-component';
import React from 'react';
import './Rating.css';
import Comments from './Comments';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      rating: 0,
    };
  }

  onStarClick(event) {
    this.setState({ rating: event });
  }

  updateField(field, event) {
    this.setState({ [field]: event.target.value });
  }

  createComment(id) {
    const { email, message, rating } = this.state;
    let storage = JSON.parse(localStorage.getItem(id));
    if (storage === null) { storage = []; }
    const newStorage = [...storage, { email, message, rating }];
    localStorage.setItem(id, [JSON.stringify(newStorage)]);
    this.setState({
      email: '',
      message: '',
      rating: 0,
    });
  }

  renderEmail() {
    const { email } = this.state;
    return (
      <div className="rating-section">
        <input
          id="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => this.updateField('email', event)}
        />
      </div>
    );
  }

  renderTextArea() {
    const { message } = this.state;
    return (
      <textarea
        placeholder="Mensagem"
        data-testid="product-detail-evaluation"
        value={message}
        onChange={(event) => this.updateField('message', event)}
      />
    );
  }

  render() {
    const { rating } = this.state;
    const { id } = this.props;
    return (
      <div>
        <form>
          <h2>Deixe sua Avaliação</h2>
          <StarRatingComponent
            name="rate1"
            className="stars"
            starCount={5}
            value={rating}
            onStarClick={(e) => this.onStarClick(e)}
          />
          {this.renderEmail()}
          {this.renderTextArea()}
          <button type="button" className="rating-button" onClick={() => this.createComment(id)}>
            Avaliar
          </button>
        </form>
        <div>
          <Comments id={id} />
        </div>
      </div>
    );
  }
}

export default Rating;
