import React from 'react';
import './Rating.css';
import Comments from './Comments';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      value: '',
      storage: JSON.parse(localStorage.getItem('comments')),
    };
  }

  componentDidMount() {
    const { storage } = this.state;
    if (storage === null) {
      this.setState({ storage: [] });
    }
  }

  componentDidUpdate() {
    const { storage } = this.state;
    localStorage.setItem('comments', [JSON.stringify(storage)]);
  }

  updateField(field, event) {
    this.setState({ [field]: event.target.value });
  }

  updateRate(e) {
    this.setState({ value: e.target.value });
  }

  createComment() {
    const { email, message, value, storage } = this.state;
    this.setState({
      email: '',
      message: '',
      value: '',
      storage: [...storage, { email, message, value }],
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

  renderRadioButtons() {
    const radioButtons = [1, 2, 3, 4, 5];
    const { checked } = this.state;
    return (
      <div className="buttons">
        {radioButtons.map((e) => (
          <label htmlFor={e} key={e} className="radio-buttons">
            {e}
            <input
              type="radio"
              name="rate"
              id={e}
              value={e}
              onChange={(el) => this.updateRate(el)}
              checked={checked}
            />
          </label>
        ))}
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
    const { storage } = this.state;
    return (
      <div>
        <form>
          <h2>Deixe sua Avaliação</h2>
          {this.renderEmail()}
          {this.renderRadioButtons()}
          {this.renderTextArea()}
          <button type="button" className="rating-button" onClick={() => this.createComment()}>
            Avaliar
          </button>
        </form>
        <div>
          <Comments storage={storage} />
        </div>
      </div>
    );
  }
}

export default Rating;
