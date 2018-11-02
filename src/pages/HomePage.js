import React, { Component } from 'react';

class HomePage extends Component {
  
  state = {
    lastName: 'Wright'
  }

  render() {
    return (
      <div className="home">
        <h3>HOME PAGE</h3>
        <p>Home Props form App State: {this.props.name}</p>
        <p>Home State: {this.state.lastName}</p>
      </div>
    );
  }
}

export default HomePage;