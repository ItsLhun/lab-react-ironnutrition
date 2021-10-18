import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searched: '',
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
    // this should be the actual searched state ?
    this.props.onChangeHandle(value);
  };

  render() {
    return (
      <div className="box Search">
        <input
          onChange={(event) => {
            this.handleInputChange(event);
          }}
          name="searched"
          value={this.state.searched}
          className="input Search"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search;
