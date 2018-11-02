import React, { Component } from 'react';

class HomePage extends Component {
  
  // Setup state for this component
  state = {
    lastName: 'Last Name State'
  }


  // Using props that were passed down from parent (App.js) to this component on Line 17
  // Displaying this component's state
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