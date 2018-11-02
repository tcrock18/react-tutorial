import React, { Component } from 'react';

import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
// import ResumePage from './pages/ResumePage';
import NavbarMenu from './components/Navbar';

import './App.css';

class App extends Component {

  // Setup state only in this component
  state = {
    firstName: ''
  }

  // Functions for this component
  nameChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
    console.log(this.state.firstName)
  }
  

  // Passing props down from this component to HomePage on Line 38
  render() {
    return (
      <div className="app">
        <NavbarMenu />
        <h1>APP.js</h1>
        
        <form>
          <input type="text" placeholder="Enter your first name" onChange={this.nameChange}/>
        </form>
        <p>App State: {this.state.firstName}</p>
        <HomePage name={this.state.firstName}/>

        <ContactPage />
      </div>
    );
  }
}

export default App;