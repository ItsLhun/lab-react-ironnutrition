import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Search from './components/Search/Search';
import AddFood from './components/AddFood/AddFood';
import CaloriesDisplay from './components/CaloriesDisplay/CaloriesDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allFoods: [...foods],
      currentFoods: [...foods],
      listFood: [],
    };
  }

  foodSearch = (input) => {
    let finalFoods = [...this.state.allFoods];
    finalFoods = finalFoods.filter((food) => {
      return food.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState(() => {
      return { currentFoods: finalFoods };
    });
  };

  handleAddNewFood = (event, compState, callback) => {
    event.preventDefault();
    const { name, calories, img } = compState;
    const finalFoods = [...this.state.allFoods];
    finalFoods.push({ name, calories, image: img });
    this.setState(() => {
      return { allFoods: finalFoods };
    });
    callback();
  };

  handleAddFoodToList = (event, foodItem) => {
    const newItem = { ...foodItem };
    const newListFoodArray = [...this.state.listFood];
    let itemExists = newListFoodArray.find(
      (elem) => elem.name === newItem.name
    );

    if (itemExists) {
      itemExists.quantity += newItem.quantity;
      this.setState((previous) => {
        return { listFood: newListFoodArray };
      });
    } else {
      this.setState((previous) => {
        return { listFood: [...newListFoodArray, newItem] };
      });
    }
  };

  handleRemoveFoodFromList = (event, elem) => {
    const newListFoodArray = [...this.state.listFood];
    console.log(newListFoodArray);
    const index = newListFoodArray.findIndex((food) => {
      return food.name === elem.name;
    });
    newListFoodArray.splice(index, 1);
    this.setState((previous) => {
      return { listFood: newListFoodArray };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search onChangeHandle={this.foodSearch} />
        <AddFood addNewFood={this.handleAddNewFood} />
        <div className="columns foodsColumn">
          <div className="column">
            {this.state.currentFoods.map((food) => (
              <FoodBox
                name={food.name}
                calories={food.calories}
                imageSrc={food.image}
                onFoodToList={this.handleAddFoodToList}
              />
            ))}
          </div>

          <div className="column">
            <CaloriesDisplay
              listItems={this.state.listFood}
              onRemoveItem={this.handleRemoveFoodFromList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
