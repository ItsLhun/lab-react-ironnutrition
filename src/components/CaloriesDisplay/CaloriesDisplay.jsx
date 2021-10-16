import React, { Component } from 'react';

import './CaloriesDisplay.css';

class CaloriesDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="CaloriesWrapper align-left">
        <h2>Today's foods</h2>
        {this.props.listItems.map((elem) => {
          return (
            <li key={`${elem.name}${elem.calories}`}>
              {elem.quantity} {elem.name} = {elem.quantity * elem.calories} cal
              <button
                className="btn-remove"
                onClick={(event) => {
                  this.props.onRemoveItem(event, elem);
                }}
              >
                x
              </button>
            </li>
          );
        })}
        <p className="total-amount">
          Total:{' '}
          <span>
            {this.props.listItems.reduce((acc, elem) => {
              return acc + elem.calories * elem.quantity;
            }, 0)}
          </span>{' '}
          cal
        </p>
      </div>
    );
  }
}

export default CaloriesDisplay;
