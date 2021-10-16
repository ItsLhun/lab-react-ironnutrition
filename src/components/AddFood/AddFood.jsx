import React, { Component } from 'react';

import './AddFood.css';

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      calories: 0,
      img: '',
      displayForm: false,
    };
  }

  handleFormDisplay = () => {
    this.setState((currentState) => {
      return { displayForm: !currentState.displayForm };
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    let value = target.type === 'number' ? target.valueAsNumber : target.value;
    const name = target.name;
    if (isNaN(value) && target.type === 'number') value = '';
    this.setState({
      [name]: value,
    });
  };

  submitInputsCallback = () => {
    this.handleFormDisplay();
    this.clearFormFields();
  };

  clearFormFields = () => {
    this.setState(() => {
      return {
        name: '',
        calories: 0,
        img: '',
      };
    });
  };

  render() {
    return (
      <div>
        <button className="button is-primary" onClick={this.handleFormDisplay}>
          Add new Food
        </button>
        <form className={`AddFoodForm ${this.state.displayForm || 'd-none'}`}>
          <input
            className="input"
            name="name"
            type="text"
            placeholder="Food name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            name="calories"
            type="number"
            placeholder="Calories"
            value={this.state.calories}
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            name="img"
            type="text"
            placeholder="Picture url"
            value={this.state.img}
            onChange={this.handleInputChange}
          />
          <button
            className="button is-success"
            onClick={(event) => {
              this.props.addNewFood(
                event,
                this.state,
                this.submitInputsCallback
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddFood;
