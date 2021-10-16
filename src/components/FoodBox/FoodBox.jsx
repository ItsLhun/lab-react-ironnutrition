import React, { Component } from 'react';

import './FoodBox.css';

class FoodBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    let value = target.type === 'number' ? target.valueAsNumber : target.value;
    const name = target.name;
    if (isNaN(value) && target.type === 'number') value = '';
    this.setState({
      [name]: value,
    });
  };

  consolidateFoodObject = (event) => {
    const item = {
      name: this.props.name,
      calories: this.props.calories,
      image: this.props.imgSrc,
      quantity: this.state.quantity,
    };
    this.props.onFoodToList(event, item);
  };

  render() {
    return (
      <div key={`${this.props.name}${this.props.calories}`} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src={this.props.imageSrc}
                alt={`display of ${this.props.name}`}
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input foodBoxInput"
                  type="number"
                  name="quantity"
                  value={this.state.quantity}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="control">
                <button
                  className="button is-info"
                  onClick={this.consolidateFoodObject}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;
